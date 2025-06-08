"use client";
import React, { useEffect, useState } from "react";
import { IForms, TypeFormField } from "@/types/form";
import { useRouter } from "next/navigation";
import { getFormById, updateForm } from "@/actions/forms";
import FormEdit from "@/components/dashboard/formBuilder/FormEdit";

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

    return (
        <div className="p-2 flex justify-center w-full">
            <div className="w-full md:max-w-[95%] py-8 px-8 my-8 border-2 rounded-md shadow-xl bg-white">
                <FormEdit
                    submission={{ handleSubmit, loading }}
                    formValues={formValues}
                    setFormValues={setFormValues}
                />
            </div>
        </div>
    );
};

export default EditForm;
