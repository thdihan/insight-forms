"use client";
import { Button } from "@/components/ui/button";
import React, { ChangeEvent, useState } from "react";
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

type Props = {};

const page = (props: Props) => {
    const [formValues, setFormValues] = useState<INewForm>({
        formName: "",
        description: "",
        fields: [],
    });

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        console.log("FORM VALUES: ", formValues);
        try {
            const result = await createForm(formValues);

            console.log("RESULT: ", result);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

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
        // console.log("Updated Form Values: ", tempFormValues);
    };

    const addField = (e: any, type: string) => {
        e.preventDefault();
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
                    options: [], // Initialize with an empty array for checkbox options
                    label: "",
                    required: false,
                });
                break;
            case "select":
                tempFormValues.fields.push({
                    id: (tempFormValues.fields.length + 1).toString(),
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
                        label="Form NameEnter form name"
                        labelStyle="text-xl font-semibold"
                        inputStyle=""
                        textValue={formValues.formName}
                        inputChange={(e) => {
                            const tempFormValues = { ...formValues };
                            tempFormValues.formName = e.target.value;
                            setFormValues(tempFormValues);
                        }}
                    />
                    <TextInput
                        placeholder="Enter description..."
                        label="Description"
                        labelStyle="text-lg font-semibold"
                        inputStyle=""
                        textValue={formValues.description}
                        multiline={true}
                        inputChange={(e) => {
                            const tempFormValues = { ...formValues };
                            tempFormValues.description = e.target.value;
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
                                                {field.type === "select" && (
                                                    <SelectField
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
                    <div className="flex gap-x-2">
                        <Button
                            onClick={handleSubmit}
                            className="cursor-pointer"
                        >
                            Submit
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

export default page;
