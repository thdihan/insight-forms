"use client";
import { Button } from "@/components/ui/button";
import React, { ChangeEvent, useState } from "react";
import TextInput from "@/components/dashboard/inputs/TextInput";
import NewFieldButtons from "@/components/dashboard/forms/NewFieldButtons";
import TextField from "@/components/dashboard/forms/TextField";
import CheckboxField from "@/components/dashboard/forms/CheckboxField";
import RadiobuttonsField from "@/components/dashboard/forms/RadiobuttonsField";
import TableField from "@/components/dashboard/forms/TableField";
import { ICheckboxOption, TypeFormField } from "@/types/form";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type Props = {};

const page = (props: Props) => {
    const [formValues, setFormValues] = useState<{
        formName: string;
        fields: TypeFormField[];
    }>({
        formName: "",
        fields: [],
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("FORM VALUES: ", formValues);
    }

    const handleFieldChange = (
        id: string,
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
        console.log("Updated Form Values: ", tempFormValues);
    };

    const addField = (type: string) => {
        const tempFormValues = { ...formValues };

        switch (type) {
            case "text":
                tempFormValues.fields.push({
                    id: (tempFormValues.fields.length + 1).toString(),
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
                    id: (tempFormValues.fields.length + 1).toString(),
                    order: tempFormValues.fields.length + 1,
                    type: "checkbox",
                    options: [], // Initialize with an empty array for checkbox options
                    label: "",
                    required: false,
                });
                break;
            case "radio":
                tempFormValues.fields.push({
                    id: (tempFormValues.fields.length + 1).toString(),
                    order: tempFormValues.fields.length + 1,
                    type: "radio",
                    options: [], // Initialize with an empty array for checkbox options
                    label: "",
                    required: false,
                });
                break;
            case "table":
                tempFormValues.fields.push({
                    id: (tempFormValues.fields.length + 1).toString(),
                    order: tempFormValues.fields.length + 1,
                    type: "table",
                    columns: [], // Initialize with an empty array for checkbox options
                    label: "",
                    required: false,
                });
                break;
        }

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

            const tempIndex = tempFormValues.fields[oldIndex].order;
            tempFormValues.fields[oldIndex].order =
                tempFormValues.fields[newIndex].order;
            tempFormValues.fields[newIndex].order = tempIndex;

            setFormValues(tempFormValues);
        }
    };
    return (
        <div className="p-2 flex justify-center w-full">
            <div className="w-full md:max-w-[95%] py-8 px-8 my-8 border-2 rounded-md shadow-xl bg-white">
                <form onSubmit={handleSubmit} className="space-y-4">
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
                                            <div
                                                key={field.id}
                                                // className="space-y-2"
                                            >
                                                {field.type === "text" && (
                                                    <TextField
                                                        field={field}
                                                        onChange={
                                                            handleFieldChange
                                                        }
                                                    />
                                                )}
                                                {field.type === "checkbox" && (
                                                    <CheckboxField
                                                        field={field}
                                                        onChange={
                                                            handleFieldChange
                                                        }
                                                    />
                                                )}
                                                {field.type === "radio" && (
                                                    <RadiobuttonsField
                                                        field={field}
                                                        onChange={
                                                            handleFieldChange
                                                        }
                                                    />
                                                )}
                                                {field.type === "table" && (
                                                    <TableField
                                                        field={field}
                                                        onChange={
                                                            handleFieldChange
                                                        }
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                        </SortableContext>
                    </DndContext>

                    <NewFieldButtons addField={addField} />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default page;
