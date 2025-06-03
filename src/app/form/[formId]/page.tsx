"use client";
import { getFormById } from "@/app/actions.ts/forms";
import { IForms, TypeFormField } from "@/types/form";
import { useRouter } from "next/navigation";
import React, { Context, use, useEffect, useState } from "react";
import parse from "html-react-parser";
import TextField from "@/components/form/TextField";
import CheckboxField from "@/components/form/CheckboxField";
import RadioButtonsField from "@/components/form/RadioButtonsField";
import TableField from "@/components/form/TableField";
import SelectField from "@/components/form/SelectField";
import { Button } from "@/components/ui/button";
import { submitForm } from "@/app/actions.ts/submission";
import { Loader2 } from "lucide-react";

type Props = { params: Context<{ formId: string }> };

const page = ({ params }: Props) => {
    const [responses, setResponses] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(false);

    const { formId } = use<{ formId: string }>(params);

    const router = useRouter();
    const [formValues, setFormValues] = useState<IForms>({
        id: 1,
        formName: "",
        description: "",
        fields: [],
    });

    useEffect(() => {
        console.log(formId);
        const loadData = () => {
            getFormById(formId).then((data) => {
                console.log(data);
                if (data) {
                    const transformedData: IForms = {
                        id: data.id,
                        formName: data.formName,
                        description: data.description,
                        fields: data.fields.map((field) => {
                            const transformedField: TypeFormField = {
                                ...field,
                                type: field.type, // Ensure type matches the expected TypeFormField type
                                options: field.options || [],
                            } as TypeFormField;
                            return transformedField;
                        }),
                    };
                    setFormValues(transformedData);
                } else {
                    console.error("No data found for the given ID");
                }
            });
        };

        loadData();
    }, []);

    const handleFieldChange = (fieldId: number, value: any) => {
        setResponses((prev) => ({
            ...prev,
            [fieldId]: value,
        }));
    };

    const handleSubmit = async () => {
        console.log("Form submitted:", responses);
        setLoading(true);
        try {
            const response = await submitForm({
                formId: parseInt(formId),
                responses,
            });
            console.log("Submitted: ", response);
            setLoading(false);
            router.push("/form");
        } catch (error) {
            console.log("Error: ", error);
            setLoading(false);
        }
    };
    return (
        <div className="flex flex-col items-center w-full h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="w-full max-w-[1000px] my-4 bg-white shadow-lg border p-4 rounded-md">
                <h1 className="text-center text-2xl font-semibold py-4">
                    {formValues.formName}
                </h1>
                <div>{parse(formValues.description)}</div>

                <div className="border-b-2 py-2"></div>

                <div className="pt-8 py-4 space-y-4">
                    {formValues.fields.length > 0 &&
                        formValues.fields.map((field, index) => {
                            return (
                                <div key={index}>
                                    {field.type === "text" && (
                                        <TextField
                                            field={field}
                                            value={responses[field.id] || ""}
                                            handleChange={(e) =>
                                                handleFieldChange(
                                                    field.id,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    )}

                                    {field.type === "checkbox" && (
                                        <CheckboxField
                                            field={field}
                                            responses={responses}
                                            handleChange={handleFieldChange}
                                        />
                                    )}
                                    {field.type === "radio" && (
                                        <RadioButtonsField
                                            field={field}
                                            responses={responses}
                                            handleChange={handleFieldChange}
                                        />
                                    )}

                                    {field.type === "table" && (
                                        <TableField
                                            field={field}
                                            responses={responses}
                                            handleChange={handleFieldChange}
                                        />
                                    )}

                                    {field.type === "select" && (
                                        <SelectField
                                            field={field}
                                            responses={responses}
                                            handleChange={handleFieldChange}
                                        />
                                    )}
                                </div>
                            );
                        })}
                </div>

                <Button
                    onClick={handleSubmit}
                    className=" text-white px-4 py-2 rounded"
                >
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        "Submit"
                    )}
                </Button>
            </div>
        </div>
    );
};

export default page;
