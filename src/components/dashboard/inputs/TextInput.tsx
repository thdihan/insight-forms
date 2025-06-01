import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = {
    name?: string;
    placeholder?: string;
    label: string;
    labelStyle?: string;
    inputStyle?: string;
    type?: string;
    textValue?: string;
    inputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
    name,
    placeholder,
    label,
    labelStyle,
    textValue,
    inputChange,
    type,
}: Props) => {
    return (
        <div className="space-y-2">
            <Label htmlFor="form-name" className={`${labelStyle}`}>
                {label}
            </Label>
            <Input
                type={type || "text"}
                id="form-name"
                name={name}
                placeholder={placeholder || "Enter text here..."}
                className={`w-full p-2 border rounded-sm  ${placeholder}`}
                value={textValue || ""}
                onChange={inputChange}
            />
        </div>
    );
};

export default TextInput;
