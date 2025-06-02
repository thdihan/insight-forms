"use server";

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export const submitForm = async ({
    formId,
    responses,
}: {
    formId: number;
    responses: Record<string, string | string[] | Record<string, any>>;
}) => {
    const submission = await prisma.formSubmission.create({
        data: {
            formId,
            responses: {
                create: Object.entries(responses).map(([fieldId, value]) => {
                    const base = {
                        field: { connect: { id: Number(fieldId) } }, // Ensure the 'field' property is included and convert fieldId to a number
                    };

                    if (typeof value === "string") {
                        return {
                            ...base,
                            textValue: value,
                            selectedOption: value,
                        };
                    } else if (Array.isArray(value)) {
                        return {
                            ...base,
                            selectedOptions: value,
                        };
                    } else {
                        // It's a table field (object)
                        return {
                            ...base,
                            tableValue: value,
                        };
                    }
                }),
            },
        },
    });

    return submission;
};

export const getSubmissions = async (formId: string) => {
    const submissions = await prisma.formSubmission.findMany({
        where: { formId: Number(formId) },
        include: {
            form: {
                select: {
                    id: true,
                    formName: true,
                },
            },
            responses: {
                include: {
                    field: {
                        select: {
                            id: true,
                            label: true,
                            type: true,
                        },
                    },
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return submissions;
};
