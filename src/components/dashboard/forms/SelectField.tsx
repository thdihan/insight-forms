import { Plus } from "lucide-react";
import React, { useState } from "react";
import TextInput from "../inputs/TextInput";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ICheckboxOption, TypeFormField } from "@/types/form";
import SortableFieldWrapper from "./SortableFieldWrapper";

type Props = {
    field: TypeFormField;
    onChange: (
        id: number,
        valueName: string,
        value: string | boolean | ICheckboxOption[]
    ) => void;
    deleteAction: (e: any, id: number) => void;
};

const SelectField = ({ field, onChange, deleteAction }: Props) => {
    const addSelectOption = (e: any) => {
        e.preventDefault();
        if (field.type === "select" && Array.isArray(field.options)) {
            const tempField = { ...field };
            tempField.options = [
                ...field.options,
                {
                    id: field.options.length + 1,
                    label: "",
                },
            ];
            onChange(field.id, "options", tempField.options);
        }
    };

    const updateSelectOption = (id: number, value: string) => {
        if (field.type === "select" && Array.isArray(field.options)) {
            const tempField = { ...field };
            tempField.options = tempField.options.filter(
                (option) => option.id !== id
            );
            tempField.options.push({ id, label: value });
            onChange(field.id, "options", tempField.options);
        }
    };
    return (
        <SortableFieldWrapper
            id={field.id}
            type={field.type}
            deleteAction={deleteAction}
        >
            <TextInput
                placeholder={"Enter select field name..."}
                label="Select field name."
                textValue={field.label}
                inputChange={(e) => onChange(field.id, "label", e.target.value)}
            />
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col gap-y-4 ms-4 border-s-2 border-gray-300 border-dashed ps-4"
            >
                {field.type === "select" &&
                    field.options.length > 0 &&
                    field.options
                        .sort((a, b) => a.id - b.id)
                        .map((option, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-x-4"
                            >
                                <Label>Option {index + 1}</Label>
                                <TextInput
                                    placeholder={"Enter Option..."}
                                    label=""
                                    textValue={option.label}
                                    inputChange={(e) =>
                                        updateSelectOption(
                                            option.id,
                                            e.target.value
                                        )
                                    }
                                    labelStyle="hidden"
                                />
                            </div>
                        ))}

                <div>
                    <Button
                        className="cursor-pointer"
                        variant="outline"
                        onClick={addSelectOption}
                    >
                        <Plus />
                        Add options
                    </Button>
                </div>
            </div>
        </SortableFieldWrapper>
    );
};

export default SelectField;
