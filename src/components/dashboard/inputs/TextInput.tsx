import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = {
    placeholder?: string;
    label: string;
    labelStyle?: string;
    inputStyle?: string;
    type?: string;
    textValue?: string;
    inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
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
                onClick={(e) => e.stopPropagation()}
                type={type || "text"}
                id="form-name"
                placeholder={placeholder || "Enter text here..."}
                className={`w-full p-2 border rounded-sm  ${placeholder}`}
                value={textValue || ""}
                onChange={inputChange}
            />
        </div>
    );
};

export default TextInput;
