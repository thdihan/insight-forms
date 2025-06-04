"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import TextInput from "@/components/dashboard/inputs/TextInput";
import NewFieldButtons from "@/components/dashboard/forms/NewFieldButtons";
import TextField from "@/components/dashboard/forms/TextField";
import CheckboxField from "@/components/dashboard/forms/CheckboxField";
import RadiobuttonsField from "@/components/dashboard/forms/RadiobuttonsField";
import TableField from "@/components/dashboard/forms/TableField";
import {
    ICheckboxOption,
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

    const handleFieldChange = (
        id: number,
        sectionIdx: number,
        valueName: string,
        value: string | boolean | ICheckboxOption[]
    ) => {
        const tempFormValues = { ...formValues };

        const fields = tempFormValues.formSections[sectionIdx].fields.filter(
            (field) => field.id !== id
        );
        const updatedField: TypeFormField = {
            ...tempFormValues.formSections[sectionIdx].fields.find(
                (field) => field.id === id
            ),
            [valueName]: value,
        } as TypeFormField;

        fields.push(updatedField);

        tempFormValues.formSections[sectionIdx].fields = fields;

        setFormValues(tempFormValues);
        // console.log("Updated Form Values: ", tempFormValues);
    };

    const addField = (e: any, type: string, sectionIdx: number) => {
        e.preventDefault();
        const tempFormValues = { ...formValues };

        if (type == "text") {
            tempFormValues.formSections[sectionIdx].fields.push({
                id: tempFormValues.formSections[sectionIdx].fields.length + 1,
                order:
                    tempFormValues.formSections[sectionIdx].fields.length + 1,
                type: "text",
                placeholder: "",
                label: "",
                required: false,
                multiline: false,
            });
        } else {
            tempFormValues.formSections[sectionIdx].fields.push({
                id: tempFormValues.formSections[sectionIdx].fields.length + 1,
                order:
                    tempFormValues.formSections[sectionIdx].fields.length + 1,
                type: type as TFieldType,
                options: [], // Initialize with an empty array for checkbox options
                label: "",
                required: false,
            });
        }

        // switch (type) {
        //     case "text":
        //         tempFormValues.formSections[sectionIdx].fields.push({
        //             id:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             order:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             type: "text",
        //             placeholder: "",
        //             label: "",
        //             required: false,
        //             multiline: false,
        //         });
        //         break;
        //     case "checkbox":
        //         tempFormValues.formSections[sectionIdx].fields.push({
        //             id:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             order:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             type: "checkbox",
        //             options: [], // Initialize with an empty array for checkbox options
        //             label: "",
        //             required: false,
        //         });
        //         break;
        //     case "radio":
        //         tempFormValues.formSections[sectionIdx].fields.push({
        //             id:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             order:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             type: "radio",
        //             options: [], // Initialize with an empty array for checkbox options
        //             label: "",
        //             required: false,
        //         });
        //         break;
        //     case "table":
        //         tempFormValues.formSections[sectionIdx].fields.push({
        //             id:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             order:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             type: "table",
        //             options: [], // Initialize with an empty array for checkbox options
        //             label: "",
        //             required: false,
        //         });
        //         break;
        //     case "select":
        //         tempFormValues.formSections[sectionIdx].fields.push({
        //             id:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             order:
        //                 tempFormValues.formSections[sectionIdx].fields.length +
        //                 1,
        //             type: "select",
        //             options: [], // Initialize with an empty array for checkbox options
        //             label: "",
        //             required: false,
        //         });
        //         break;
        // }

        setFormValues(tempFormValues);
    };

    const updateIdAndOrder = (tempFormValues: INewForm, sectionIdx: number) => {
        tempFormValues.formSections[sectionIdx].fields
            .sort((a, b) => a.order - b.order)
            .forEach((field, index) => {
                field.id = index + 1;
                field.order = index + 1;
            });
        return tempFormValues;
    };

    /**
     * Deletes a field from a specific section of the form by its ID,
     * updates the field order and IDs, and sets the updated form values.
     *
     * @param {React.MouseEvent} e - The event object from the delete button click.
     * @param {number} id - The ID of the field to be deleted.
     * @param {number} sectionIdx - The index of the section from which the field is to be removed.
     */
    const deleteField = (e: any, id: number, sectionIdx: number) => {
        e.preventDefault();
        let tempFormValues = { ...formValues };

        tempFormValues.formSections[sectionIdx].fields =
            tempFormValues.formSections[sectionIdx].fields.filter(
                (field) => id != field.id
            );
        tempFormValues = updateIdAndOrder(tempFormValues, sectionIdx);
        setFormValues(tempFormValues);
    };

    /**
     *
     * @param event
     */
    const handleDragEnd = (event: DragEndEvent, sectionIdx: number) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const tempFormValues = { ...formValues };
            const oldIndex = tempFormValues.formSections[
                sectionIdx
            ].fields.findIndex((f) => f.id === active.id);
            const newIndex = tempFormValues.formSections[
                sectionIdx
            ].fields.findIndex((f) => f.id === over?.id);

            // Remove the dragged item from its old position
            const [movedItem] = tempFormValues.formSections[
                sectionIdx
            ].fields.splice(oldIndex, 1);

            // Insert the dragged item at the new position
            tempFormValues.formSections[sectionIdx].fields.splice(
                newIndex,
                0,
                movedItem
            );

            // Recalculate the order for all items
            tempFormValues.formSections[sectionIdx].fields.forEach(
                (field, index) => {
                    field.order = index + 1;
                }
            );

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

                    {formValues.formSections.length > 0 &&
                        formValues.formSections.map((section, idx) => (
                            <div key={idx}>
                                <div className="border-t-4 border-dashed py-1"></div>

                                <div className="space-y-2">
                                    <TextInput
                                        placeholder="Enter section name..."
                                        label="Section Name"
                                        labelStyle="text-lg font-semibold"
                                        inputStyle=""
                                        textValue={
                                            formValues.formSections[idx]
                                                .sectionName
                                        }
                                        inputChange={(e) => {
                                            const tempFormValues = {
                                                ...formValues,
                                            };
                                            tempFormValues.formSections[
                                                idx
                                            ].sectionName = e.target.value;
                                            setFormValues(tempFormValues);
                                        }}
                                    />
                                    <TextInput
                                        placeholder="Enter section description..."
                                        label="Section Description"
                                        labelStyle="text-md font-semibold"
                                        inputStyle=""
                                        multiline={true}
                                        textValue={
                                            formValues.formSections[idx]
                                                .sectionDescription
                                        }
                                        inputChange={(e) => {
                                            const tempFormValues = {
                                                ...formValues,
                                            };
                                            tempFormValues.formSections[
                                                idx
                                            ].sectionDescription =
                                                e.target.value;
                                            setFormValues(tempFormValues);
                                        }}
                                    />
                                </div>
                                {/* Form Fields */}
                                <DndContext
                                    collisionDetection={closestCenter}
                                    onDragEnd={(e) => handleDragEnd(e, idx)}
                                >
                                    <SortableContext
                                        items={section.fields.map(
                                            (field) => field.id
                                        )}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {section.fields?.length > 0 &&
                                            section.fields
                                                .sort(
                                                    (a, b) => a.order - b.order
                                                )
                                                .map((field, index) => {
                                                    return (
                                                        <div
                                                            key={field.id}
                                                            className="py-2"
                                                        >
                                                            {field.type ===
                                                                "text" && (
                                                                <TextField
                                                                    sectionIdx={
                                                                        idx
                                                                    }
                                                                    field={
                                                                        field
                                                                    }
                                                                    onChange={
                                                                        handleFieldChange
                                                                    }
                                                                    deleteAction={
                                                                        deleteField
                                                                    }
                                                                />
                                                            )}
                                                            {field.type ===
                                                                "checkbox" && (
                                                                <CheckboxField
                                                                    sectionIdx={
                                                                        idx
                                                                    }
                                                                    field={
                                                                        field
                                                                    }
                                                                    onChange={
                                                                        handleFieldChange
                                                                    }
                                                                    deleteAction={
                                                                        deleteField
                                                                    }
                                                                />
                                                            )}
                                                            {field.type ===
                                                                "radio" && (
                                                                <RadiobuttonsField
                                                                    field={
                                                                        field
                                                                    }
                                                                    sectionIdx={
                                                                        idx
                                                                    }
                                                                    onChange={
                                                                        handleFieldChange
                                                                    }
                                                                    deleteAction={
                                                                        deleteField
                                                                    }
                                                                />
                                                            )}
                                                            {field.type ===
                                                                "table" && (
                                                                <TableField
                                                                    field={
                                                                        field
                                                                    }
                                                                    sectionIdx={
                                                                        idx
                                                                    }
                                                                    onChange={
                                                                        handleFieldChange
                                                                    }
                                                                    deleteAction={
                                                                        deleteField
                                                                    }
                                                                />
                                                            )}
                                                            {field.type ===
                                                                "select" && (
                                                                <SelectField
                                                                    field={
                                                                        field
                                                                    }
                                                                    sectionIdx={
                                                                        idx
                                                                    }
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

                                <div className="border-t-4 border-dashed my-2"></div>

                                <NewFieldButtons
                                    addField={addField}
                                    sectionIdx={idx}
                                />
                            </div>
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
            </div>
        </div>
    );
};

export default CreateForm;
