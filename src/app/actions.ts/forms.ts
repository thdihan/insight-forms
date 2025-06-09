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
            sections: {
                include: {
                    fields: {
                        include: {
                            options: true, // Include options if fields have related options
                        },
                    },
                },
            },
        },
    });

    return response;
};

export const getForms = async () => {
    const response = await prisma.form.findMany({
        include: {
            sections: {
                include: {
                    fields: {
                        include: {
                            options: true, // Include options if fields have related options
                        },
                    },
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

// const updatedForm = await prisma.form.update({
//     where: {
//         id: id,
//     },
//     data: {
//         formName: values.formName,
//         description: values.description,
//         fields: {
//             deleteMany: {}, // Delete all existing fields for the form
//             create: values.fields.map((field) => ({
//                 id: field.id,
//                 order: field.order,
//                 type: field.type,
//                 label: field.label,
//                 required: field.required || false,
//                 placeholder: field.placeholder || null,
//                 multiline:
//                     field.type === "text"
//                         ? (field as any).multiline ?? false
//                         : undefined,
//                 options:
//                     "options" in field && field.options?.length
//                         ? {
//                               create:
//                                   field.options?.map((option) => ({
//                                       id: Number(option.id),
//                                       label: option.label,
//                                       createdAt:
//                                           option.createdAt || undefined,
//                                       updatedAt:
//                                           option.updatedAt || undefined,
//                                   })) || [],
//                           }
//                         : undefined,
//             })),
//         },
//     },
// });
export const updateForm = async (id: number, values: IForms) => {
    try {
        const updatedForm = await prisma.$transaction([
            prisma.formSection.deleteMany({
                where: {
                    formId: id,
                },
            }),

            prisma.form.update({
                where: { id },
                data: {
                    formName: values.formName,
                    description: values.description,
                    sections: {
                        create: values.formSections.map((section) => {
                            const isNewSection =
                                section.createdAt === null ||
                                section.createdAt === undefined;
                            return {
                                ...(isNewSection ? {} : { id: section.id }),
                                sectionName: section.sectionName,
                                sectionDescription: section.sectionDescription,
                                fields: {
                                    create: section.fields.map((field) => {
                                        const isNewField =
                                            field.createdAt === null ||
                                            field.createdAt === undefined;
                                        console.log("Section Created");
                                        return {
                                            ...(isNewField
                                                ? {}
                                                : { id: field.id }),
                                            order: field.order,
                                            type: field.type,
                                            label: field.label,
                                            required: field.required || false,
                                            placeholder:
                                                field.placeholder || null,
                                            multiline:
                                                field.type === "text"
                                                    ? (field as any)
                                                          .multiline ?? false
                                                    : undefined,
                                            options:
                                                "options" in field &&
                                                field.options?.length
                                                    ? {
                                                          create: field.options.map(
                                                              (option) => {
                                                                  const isNewOption =
                                                                      option.createdAt ===
                                                                          null ||
                                                                      option.createdAt ===
                                                                          undefined;
                                                                  return {
                                                                      ...(isNewOption
                                                                          ? {}
                                                                          : {
                                                                                id: Number(
                                                                                    option.id
                                                                                ),
                                                                            }),
                                                                      label: option.label,
                                                                  };
                                                              }
                                                          ),
                                                      }
                                                    : undefined,
                                        };
                                    }),
                                },
                            };
                        }),
                    },
                },
            }),
        ]);
        console.log("Form updated successfully:", updatedForm);
        return updatedForm;
    } catch (error) {
        console.error("Error updating form:", error);
        throw error;
    }
};
