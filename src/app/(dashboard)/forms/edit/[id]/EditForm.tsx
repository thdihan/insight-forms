"use client";
import React, { useEffect, useState } from "react";
import { IForms, TypeFormField } from "@/types/form";
import { useRouter } from "next/navigation";
import { getFormById, updateForm } from "@/app/actions.ts/forms";
import FormEdit from "@/components/dashboard/formBuilder/FormEdit";
import { Button } from "@/components/ui/button";
import { Eye, Save } from "lucide-react";

type Props = {
    id: string;
};

const EditForm = ({ id }: Props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState<IForms>({
        id: 1,
        formName: "",
        description: "",
        formSections: [],
    });

    useEffect(() => {
        // console.log(id);
        const loadData = () => {
            getFormById(id).then((data) => {
                console.log(data);
                if (data) {
                    const transformedData: IForms = {
                        id: data.id,
                        formName: data.formName,
                        description: data.description,
                        formSections: data.sections.map((section: any) => ({
                            ...section,
                            sectionName: section.sectionName ?? "", // Convert null to an empty string
                        })),
                    };

                    console.log("Transformed Data : ", transformedData);
                    setFormValues(transformedData);
                } else {
                    console.error("No data found for the given ID");
                }
            });
        };

        loadData();
    }, []);

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        console.log("FORM VALUES: ", formValues);
        setLoading(true);
        try {
            const result = await updateForm(Number(formValues.id), formValues);

            console.log("RESULT: ", result);
            setLoading(false);
            router.push("/forms");
        } catch (error) {
            console.log("Error: ", error);
            setLoading(false);
        }
    };
    const handleSave = (state: boolean) => {};
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Update Form
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Build your form with sections and fields
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={() => handleSave(false)}>
                        <Save className="w-4 h-4 mr-2" />
                        Save Draft
                    </Button>
                    <Button onClick={() => handleSave(true)}>
                        <Eye className="w-4 h-4 mr-2" />
                        Publish Form
                    </Button>
                </div>
            </div>

            <FormEdit
                submission={{ handleSubmit, loading }}
                formValues={formValues}
                setFormValues={setFormValues}
            />
        </div>
    );
};

export default EditForm;
