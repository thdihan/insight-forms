"use client";
import React, { useState } from "react";
import { IForms, INewForm } from "@/types/form";
import { createForm } from "@/app/actions.ts/createForm";
import { useRouter } from "next/navigation";
import "react-quill-new/dist/quill.snow.css";
import FormEdit from "@/components/dashboard/formBuilder/FormEdit";

type Props = {};

const CreateForm = (props: Props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState<IForms>({
        formName: "",
        description: "",
        formSections: [
            {
                id: 0,
                sectionName: "",
                sectionDescription: "",
                fields: [],
            },
        ],
    });

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        console.log("FORM VALUES: ", formValues);
        setLoading(true);
        try {
            const result = await createForm(formValues);

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
                <h2 className="text-2xl font-bold pb-4">Create New Form</h2>
                <FormEdit
                    submission={{ handleSubmit, loading }}
                    formValues={formValues}
                    setFormValues={setFormValues}
                />
            </div>
        </div>
    );
};

export default CreateForm;
