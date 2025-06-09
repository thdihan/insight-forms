import { TypeFormField } from "@/types/form";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

type Props = {
    field: TypeFormField;
    responses: Record<string, any>;
    handleChange: (fieldId: number, value: any) => void;
};

const RadioButtonsField = ({ field, handleChange, responses }: Props) => {
    return (
        <div>
            <h3 className="text-md font-semibold py-2">{field.label}</h3>

            <div className="flex flex-wrap gap-x-8">
                <RadioGroup
                    defaultValue="comfortable"
                    className="grid grid-cols-3 gap-8"
                    value={responses[field.id] || ""}
                    onValueChange={(val) => handleChange(field.id, val)}
                >
                    {field.type === "radio" &&
                        field.options.map((option, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-x-2"
                            >
                                <RadioGroupItem
                                    value={option.label}
                                    id={option.label}
                                />
                                <Label htmlFor={option.label}>
                                    {option.label}
                                </Label>
                            </div>
                        ))}
                </RadioGroup>
            </div>
        </div>
    );
};

export default RadioButtonsField;
