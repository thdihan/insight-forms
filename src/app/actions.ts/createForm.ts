"use server";

import { FieldType, PrismaClient } from "@/generated/prisma";
import { IForms, INewForm, TypeFormField } from "@/types/form";

const prisma = new PrismaClient();

export const createForm = async (form: IForms) => {
    const { formName, description, formSections } = form;

    const createdForm = await prisma.form.create({
        data: {
            formName,
            description,
            sections: {
                create: formSections.map((section: any) => {
                    return {
                        sectionName: section.sectionName,
                        sectionDescription: section.sectionDescription,
                        fields: {
                            create: section.fields.map(
                                (field: TypeFormField) => {
                                    const baseField = {
                                        order: field.order,
                                        label: field.label,
                                        required: field.required ?? false,
                                        placeholder: field.placeholder,
                                        type: field.type as FieldType,
                                        multiline:
                                            field.type === "text"
                                                ? (field as any).multiline ??
                                                  false
                                                : undefined,
                                        options:
                                            "options" in field &&
                                            field.options?.length
                                                ? {
                                                      create: field.options.map(
                                                          (option) => ({
                                                              label: option.label,
                                                          })
                                                      ),
                                                  }
                                                : undefined,
                                    };

                                    return baseField;
                                }
                            ),
                        },
                    };
                }),
            },
        },
        include: {
            sections: {
                include: {
                    fields: {
                        include: {
                            options: true,
                        },
                    },
                },
            },
        },
    });

    return createdForm;
};
