"use client";
import { Button } from "@/components/ui/button";
import React, { Dispatch, useState } from "react";
import TextInput from "@/components/dashboard/inputs/TextInput";
import NewFieldButtons from "@/components/dashboard/forms/NewFieldButtons";
import TextField from "@/components/dashboard/forms/TextField";
import CheckboxField from "@/components/dashboard/forms/CheckboxField";
import RadiobuttonsField from "@/components/dashboard/forms/RadiobuttonsField";
import TableField from "@/components/dashboard/forms/TableField";
import {
    ICheckboxOption,
    IForms,
    INewForm,
    TFieldType,
    TypeFormField,
} from "@/types/form";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SelectField from "@/components/dashboard/forms/SelectField";
import { Loader2 } from "lucide-react";
// import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Label } from "@/components/ui/label";

import dynamic from "next/dynamic";
import FormSection from "./FormSection";

const ReactQuill = dynamic(() => import("react-quill-new"), {
    ssr: false,
});

type Props = {
    formValues: INewForm | IForms;
    setFormValues:
        | Dispatch<React.SetStateAction<INewForm>>
        | Dispatch<React.SetStateAction<IForms>>;
    submission: {
        handleSubmit: (e: any) => void;
        loading: boolean;
    };
};

const FormEdit = ({ formValues, setFormValues, submission }: Props) => {
    const { handleSubmit, loading } = submission;

    return (
        <form className="space-y-4">
            {/* Form Name  */}
            <TextInput
                placeholder="Enter form name..."
                label="Form Name"
                labelStyle="text-xl font-semibold"
                inputStyle=""
                textValue={formValues.formName}
                inputChange={(e) => {
                    const tempFormValues = { ...formValues };
                    tempFormValues.formName = e.target.value;
                    setFormValues(tempFormValues as IForms);
                }}
            />
            <div className="space-y-2">
                <Label htmlFor="form-name" className={`text-lg font-semibold`}>
                    Description
                </Label>
                <ReactQuill
                    theme="snow"
                    value={formValues.description}
                    onChange={(val: string) => {
                        const tempFormValues = { ...formValues };
                        tempFormValues.description = val;
                        setFormValues(tempFormValues as IForms);
                    }}
                    className="rounde-lg"
                />
            </div>

            {formValues.formSections.length > 0 &&
                formValues.formSections.map((section, idx) => (
                    <FormSection
                        key={idx}
                        section={section}
                        formValues={formValues}
                        setFormValues={setFormValues}
                        idx={idx}
                    />
                ))}

            <div className="flex gap-x-2 border-t  pt-4">
                <Button
                    onClick={handleSubmit}
                    className="cursor-pointer"
                    disabled={loading}
                >
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        "Submit"
                    )}
                </Button>
                <Button variant="outline" className="cursor-pointer">
                    Preview
                </Button>
            </div>
        </form>
    );
};

export default FormEdit;
