"use client";
import { getFormById } from "@/app/actions.ts/forms";
import { IForms, TFormSection, TypeFormField } from "@/types/form";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Button } from "@/components/ui/button";
import { submitForm } from "@/app/actions.ts/submission";
import { Loader2 } from "lucide-react";
import TextField from "@/components/form/TextField";
import CheckboxField from "@/components/form/CheckboxField";
import RadioButtonsField from "@/components/form/RadioButtonsField";
import TableField from "@/components/form/TableField";
import SelectField from "@/components/form/SelectField";

type Props = { params: any };

const page = ({ params }: Props) => {
    const [responses, setResponses] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(false);

    const { formId } = params;

    const router = useRouter();
    const [formValues, setFormValues] = useState<IForms>({
        id: 1,
        formName: "",
        description: "",
        formSections: [],
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
                        formSections: data.sections.map((section) => {
                            const transformedSection: TFormSection = {
                                ...section,
                                sectionName: section.sectionName as string,
                                sectionDescription:
                                    section?.sectionDescription as string,
                                fields: section.fields.map((field) => {
                                    const transformedField: TypeFormField = {
                                        ...field,
                                        type: field.type, // Ensure type matches the expected TypeFormField type
                                        options: field.options || [],
                                    } as TypeFormField;
                                    return transformedField;
                                }),
                            };

                            return transformedSection;
                        }),
                    };

                    console.log("FORM DATA: ", transformedData);
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

    const handleSubmit = async (e: any) => {
        e.preventDefault();
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
        <div className="w-full h-[100%] flex justify-center">
            <div className="w-full max-w-[1000px] m-4 border  rounded-lg">
                {/* Header  */}
                <div className="bg-[rgb(255,105,0)] rounded-t-md p-6 text-white">
                    <h2 className="text-center text-xl font-bold text-white">
                        {formValues.formName}
                    </h2>

                    <div className=" text-center py-2">
                        {parse(formValues.description)}
                    </div>
                </div>

                {/* Main Form  */}

                <form onSubmit={handleSubmit}>
                    <div className="p-6">
                        {formValues.formSections.length > 0 &&
                            formValues.formSections.map((section, index) => (
                                <div
                                    key={index}
                                    className="border p-6 rounded-md bg-[#F9FAFB] mb-4"
                                >
                                    <h3 className="text-lg font-semibold border-b pb-2 mb-2">
                                        {section.sectionName}
                                    </h3>

                                    <div className="py-2 space-y-4">
                                        {section.fields.length > 0 &&
                                            section.fields.map(
                                                (field, index) => {
                                                    switch (field.type) {
                                                        case "text":
                                                            return (
                                                                <TextField
                                                                    field={
                                                                        field
                                                                    }
                                                                    value={
                                                                        responses[
                                                                            field
                                                                                .id
                                                                        ] || ""
                                                                    }
                                                                    handleChange={(
                                                                        e
                                                                    ) =>
                                                                        handleFieldChange(
                                                                            field.id,
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                            );
                                                            break;
                                                        case "checkbox":
                                                            return (
                                                                <CheckboxField
                                                                    field={
                                                                        field
                                                                    }
                                                                    responses={
                                                                        responses
                                                                    }
                                                                    handleChange={
                                                                        handleFieldChange
                                                                    }
                                                                />
                                                            );
                                                        case "radio":
                                                            return (
                                                                <RadioButtonsField
                                                                    field={
                                                                        field
                                                                    }
                                                                    responses={
                                                                        responses
                                                                    }
                                                                    handleChange={
                                                                        handleFieldChange
                                                                    }
                                                                />
                                                            );
                                                        case "table":
                                                            return (
                                                                <TableField
                                                                    field={
                                                                        field
                                                                    }
                                                                    responses={
                                                                        responses
                                                                    }
                                                                    handleChange={
                                                                        handleFieldChange
                                                                    }
                                                                />
                                                            );
                                                        case "select":
                                                            return (
                                                                <SelectField
                                                                    field={
                                                                        field
                                                                    }
                                                                    responses={
                                                                        responses
                                                                    }
                                                                    handleChange={
                                                                        handleFieldChange
                                                                    }
                                                                />
                                                            );
                                                    }
                                                }
                                            )}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="px-6 mb-2">
                        <Button
                            type="submit"
                            className=" text-white px-4 py-2 min-w-[100px] rounded hover:bg-amber-500 bg-[rgb(255,105,0)] cursor-pointer"
                        >
                            {loading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;
