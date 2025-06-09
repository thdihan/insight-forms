import React, { Dispatch } from "react";
import TextInput from "../inputs/TextInput";
import {
    ICheckboxOption,
    IForms,
    INewForm,
    TFieldType,
    TFormSection,
    TypeFormField,
} from "@/types/form";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TextField from "../forms/TextField";
import CheckboxField from "../forms/CheckboxField";
import RadiobuttonsField from "../forms/RadiobuttonsField";
import TableField from "../forms/TableField";
import SelectField from "../forms/SelectField";
import NewFieldButtons from "../forms/NewFieldButtons";

type Props = {
    section: TFormSection;
    formValues: IForms;
    setFormValues:
        | Dispatch<React.SetStateAction<INewForm>>
        | Dispatch<React.SetStateAction<IForms>>;
    idx: number;
};

const FormSection = ({ section, formValues, setFormValues, idx }: Props) => {
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

        setFormValues(tempFormValues);
    };

    const updateIdAndOrder = (tempFormValues: IForms, sectionIdx: number) => {
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
        <div>
            <div className="space-y-2">
                <TextInput
                    placeholder="Enter section name..."
                    label="Section Name"
                    labelStyle="text-lg font-semibold"
                    inputStyle=""
                    textValue={section.sectionName}
                    inputChange={(e) => {
                        const tempFormValues = {
                            ...formValues,
                        };
                        tempFormValues.formSections[idx].sectionName =
                            e.target.value;
                        setFormValues(tempFormValues);
                    }}
                />
                <TextInput
                    placeholder="Enter section description..."
                    label="Section Description"
                    labelStyle="text-md font-semibold"
                    inputStyle=""
                    multiline={true}
                    textValue={section.sectionDescription}
                    inputChange={(e) => {
                        const tempFormValues = {
                            ...formValues,
                        };
                        tempFormValues.formSections[idx].sectionDescription =
                            e.target.value;
                        setFormValues(tempFormValues);
                    }}
                />
            </div>

            {/* Form Fields */}

            <div className="mt-2 border-t-4 border-dashed py-1"></div>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={(e) => handleDragEnd(e, idx)}
            >
                <SortableContext
                    items={section.fields.map((field) => field.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {section.fields?.length > 0 &&
                        section.fields
                            .sort((a, b) => a.order - b.order)
                            .map((field, index) => {
                                return (
                                    <div key={field.id} className="py-2">
                                        {field.type === "text" && (
                                            <TextField
                                                sectionIdx={idx}
                                                field={field}
                                                onChange={handleFieldChange}
                                                deleteAction={deleteField}
                                            />
                                        )}
                                        {field.type === "checkbox" && (
                                            <CheckboxField
                                                sectionIdx={idx}
                                                field={field}
                                                onChange={handleFieldChange}
                                                deleteAction={deleteField}
                                            />
                                        )}
                                        {field.type === "radio" && (
                                            <RadiobuttonsField
                                                field={field}
                                                sectionIdx={idx}
                                                onChange={handleFieldChange}
                                                deleteAction={deleteField}
                                            />
                                        )}
                                        {field.type === "table" && (
                                            <TableField
                                                field={field}
                                                sectionIdx={idx}
                                                onChange={handleFieldChange}
                                                deleteAction={deleteField}
                                            />
                                        )}
                                        {field.type === "select" && (
                                            <SelectField
                                                field={field}
                                                sectionIdx={idx}
                                                onChange={handleFieldChange}
                                                deleteAction={deleteField}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                </SortableContext>
            </DndContext>

            <div className="border-t-4 border-dashed my-2"></div>

            <NewFieldButtons addField={addField} sectionIdx={idx} />
        </div>
    );
};

export default FormSection;
