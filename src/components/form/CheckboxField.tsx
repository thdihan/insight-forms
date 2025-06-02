import { TypeFormField } from "@/types/form";
import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

type Props = {
    field: TypeFormField;
    responses: Record<string, any>;
    handleChange: (fieldId: number, value: any) => void;
};

const CheckboxField = ({ field, handleChange, responses }: Props) => {
    return (
        <div>
            <h3 className="text-lg py-2">{field.label}</h3>

            <div className="flex flex-wrap gap-x-8">
                {field.type === "checkbox" &&
                    field.options.map((option, index) => (
                        <div key={index} className="flex items-center gap-x-2">
                            <Checkbox
                                checked={(responses[field.id] || []).includes(
                                    option.label
                                )}
                                onCheckedChange={(checked) => {
                                    const current = responses[field.id] || [];
                                    const updated = checked
                                        ? [...current, option.label]
                                        : current.filter(
                                              (id: string) =>
                                                  id !== option.label
                                          );
                                    handleChange(field.id, updated);
                                }}
                            />
                            <Label>{option.label}</Label>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CheckboxField;
