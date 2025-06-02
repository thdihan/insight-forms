import { TypeFormField } from "@/types/form";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

type Props = {
    field: TypeFormField;
    responses: Record<string, any>;
    handleChange: (fieldId: number, value: any) => void;
};

const SelectField = ({ field, handleChange, responses }: Props) => {
    return (
        <div>
            <h3 className="text-lg py-2">{field.label}</h3>
            <Select
                value={responses[field.id] || ""}
                onValueChange={(val) => handleChange(field.id, val)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={field.label} />
                </SelectTrigger>
                <SelectContent className="bg-white w-full">
                    {field.type === "select" &&
                        field.options.map((option, index) => (
                            <SelectItem
                                key={index}
                                value={option.label}
                                className="w-[800px]"
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectField;
