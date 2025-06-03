"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import TextInput from "@/components/dashboard/inputs/TextInput";
import NewFieldButtons from "@/components/dashboard/forms/NewFieldButtons";
import TextField from "@/components/dashboard/forms/TextField";
import CheckboxField from "@/components/dashboard/forms/CheckboxField";
import RadiobuttonsField from "@/components/dashboard/forms/RadiobuttonsField";
import TableField from "@/components/dashboard/forms/TableField";
import { ICheckboxOption, INewForm, TypeFormField } from "@/types/form";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SelectField from "@/components/dashboard/forms/SelectField";
import { createForm } from "@/app/actions.ts/createForm";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
// import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Label } from "@/components/ui/label";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), {
    ssr: false,
});

type Props = {};

const CreateForm = (props: Props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState<INewForm>({
        formName: "",
        description: "",
        fields: [],
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

    const handleFieldChange = (
        id: number,
        valueName: string,
        value: string | boolean | ICheckboxOption[]
    ) => {
        const tempFormValues = { ...formValues };

        const fields = tempFormValues.fields.filter((field) => field.id !== id);
        const updatedField: TypeFormField = {
            ...tempFormValues.fields.find((field) => field.id === id),
            [valueName]: value,
        } as TypeFormField;

        fields.push(updatedField);

        tempFormValues.fields = fields;

        setFormValues(tempFormValues);
        // console.log("Updated Form Values: ", tempFormValues);
    };

    const addField = (e: any, type: string) => {
        e.preventDefault();
        const tempFormValues = { ...formValues };

        switch (type) {
            case "text":
                tempFormValues.fields.push({
                    id: tempFormValues.fields.length + 1,
                    order: tempFormValues.fields.length + 1,
                    type: "text",
                    placeholder: "",
                    label: "",
                    required: false,
                    multiline: false,
                });
                break;
            case "checkbox":
                tempFormValues.fields.push({
                    id: tempFormValues.fields.length + 1,
                    order: tempFormValues.fields.length + 1,
                    type: "checkbox",
                    options: [], // Initialize with an empty array for checkbox options
                    label: "",
                    required: false,
                });
                break;
            case "radio":
                tempFormValues.fields.push({
                    id: tempFormValues.fields.length + 1,
                    order: tempFormValues.fields.length + 1,
                    type: "radio",
                    options: [], // Initialize with an empty array for checkbox options
                    label: "",
                    required: false,
                });
                break;
            case "table":
                tempFormValues.fields.push({
                    id: tempFormValues.fields.length + 1,
                    order: tempFormValues.fields.length + 1,
                    type: "table",
                    options: [], // Initialize with an empty array for checkbox options
                    label: "",
                    required: false,
                });
                break;
            case "select":
                tempFormValues.fields.push({
                    id: tempFormValues.fields.length + 1,
                    order: tempFormValues.fields.length + 1,
                    type: "select",
                    options: [], // Initialize with an empty array for checkbox options
                    label: "",
                    required: false,
                });
                break;
        }

        setFormValues(tempFormValues);
    };

    const updateIdAndOrder = (tempFormValues: INewForm) => {
        tempFormValues.fields
            .sort((a, b) => a.order - b.order)
            .forEach((field, index) => {
                field.id = index + 1;
                field.order = index + 1;
            });
        return tempFormValues;
    };
    const deleteField = (e: any, id: number) => {
        e.preventDefault();
        let tempFormValues = { ...formValues };

        tempFormValues.fields = tempFormValues.fields.filter(
            (field) => id != field.id
        );
        tempFormValues = updateIdAndOrder(tempFormValues);
        setFormValues(tempFormValues);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const tempFormValues = { ...formValues };
            const oldIndex = tempFormValues.fields.findIndex(
                (f) => f.id === active.id
            );
            const newIndex = tempFormValues.fields.findIndex(
                (f) => f.id === over?.id
            );

            // Remove the dragged item from its old position
            const [movedItem] = tempFormValues.fields.splice(oldIndex, 1);

            // Insert the dragged item at the new position
            tempFormValues.fields.splice(newIndex, 0, movedItem);

            // Recalculate the order for all items
            tempFormValues.fields.forEach((field, index) => {
                field.order = index + 1;
            });

            setFormValues(tempFormValues);
        }
    };
    return (
        <div className="p-2 flex justify-center w-full">
            <div className="w-full md:max-w-[95%] py-8 px-8 my-8 border-2 rounded-md shadow-xl bg-white">
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
                            setFormValues(tempFormValues);
                        }}
                    />
                    <div className="space-y-2">
                        <Label
                            htmlFor="form-name"
                            className={`text-lg font-semibold`}
                        >
                            Description
                        </Label>
                        <ReactQuill
                            theme="snow"
                            value={formValues.description}
                            onChange={(val: string) => {
                                const tempFormValues = { ...formValues };
                                tempFormValues.description = val;
                                setFormValues(tempFormValues);
                            }}
                            className="rounde-lg"
                        />
                    </div>

                    <div className="border-t border-2 border-dashed"></div>
                    {/* Form Fields */}
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={formValues.fields.map((field) => field.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            {formValues.fields?.length > 0 &&
                                formValues.fields
                                    .sort((a, b) => a.order - b.order)
                                    .map((field, index) => {
                                        return (
                                            <div key={field.id}>
                                                {field.type === "text" && (
                                                    <TextField
                                                        field={field}
                                                        onChange={
                                                            handleFieldChange
                                                        }
                                                        deleteAction={
                                                            deleteField
                                                        }
                                                    />
                                                )}
                                                {field.type === "checkbox" && (
                                                    <CheckboxField
                                                        field={field}
                                                        onChange={
                                                            handleFieldChange
                                                        }
                                                        deleteAction={
                                                            deleteField
                                                        }
                                                    />
                                                )}
                                                {field.type === "radio" && (
                                                    <RadiobuttonsField
                                                        field={field}
                                                        onChange={
                                                            handleFieldChange
                                                        }
                                                        deleteAction={
                                                            deleteField
                                                        }
                                                    />
                                                )}
                                                {field.type === "table" && (
                                                    <TableField
                                                        field={field}
                                                        onChange={
                                                            handleFieldChange
                                                        }
                                                        deleteAction={
                                                            deleteField
                                                        }
                                                    />
                                                )}
                                                {field.type === "select" && (
                                                    <SelectField
                                                        field={field}
                                                        onChange={
                                                            handleFieldChange
                                                        }
                                                        deleteAction={
                                                            deleteField
                                                        }
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                        </SortableContext>
                    </DndContext>

                    <div className="border-b border-2 border-dashed"></div>

                    <NewFieldButtons addField={addField} />
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
            </div>
        </div>
    );
};

export default CreateForm;
