"use server";

import { FieldType, PrismaClient } from "@/generated/prisma";
import { IForms, INewForm, TypeFormField } from "@/types/form";

const prisma = new PrismaClient();

export const getFormById = async (id: string) => {
    const response = await prisma.form.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            fields: {
                include: {
                    options: true, // Include options if fields have related options
                },
            },
        },
    });

    return response;
};

export const getForms = async () => {
    const response = await prisma.form.findMany({
        include: {
            fields: {
                include: {
                    options: true, // Include options if fields have related options
                },
            },
        },
    });

    return response;
};

export const deleteForm = async (id: number) => {
    const response = await prisma.form.delete({
        where: {
            id: id,
        },
    });

    return response;
};

export const updateForm = async (id: number, values: IForms) => {
    try {
        const updatedForm = await prisma.form.update({
            where: {
                id: id,
            },
            data: {
                formName: values.formName,
                description: values.description,
                fields: {
                    deleteMany: {}, // Delete all existing fields for the form
                    create: values.fields.map((field) => ({
                        id: field.id,
                        order: field.order,
                        type: field.type,
                        label: field.label,
                        required: field.required || false,
                        placeholder: field.placeholder || null,
                        multiline:
                            field.type === "text"
                                ? (field as any).multiline ?? false
                                : undefined,
                        options:
                            "options" in field && field.options?.length
                                ? {
                                      create:
                                          field.options?.map((option) => ({
                                              id: option.id,
                                              label: option.label,
                                              createdAt:
                                                  option.createdAt || undefined,
                                              updatedAt:
                                                  option.updatedAt || undefined,
                                          })) || [],
                                  }
                                : undefined,
                    })),
                },
            },
        });

        console.log("Form updated successfully:", updatedForm);
        return updatedForm;
    } catch (error) {
        console.error("Error updating form:", error);
        throw error;
    }
};
