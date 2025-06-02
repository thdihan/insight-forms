import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {
    placeholder?: string;
    label: string;
    labelStyle?: string;
    inputStyle?: string;
    type?: string;
    textValue?: string;
    inputChange: (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    multiline?: boolean;
};

const TextInput = ({
    placeholder,
    label,
    labelStyle,
    inputStyle,
    textValue,
    inputChange,
    type,
    multiline = false,
}: Props) => {
    return (
        <div className="space-y-2">
            <Label htmlFor="form-name" className={`${labelStyle}`}>
                {label}
            </Label>
            {!multiline ? (
                <Input
                    onClick={(e) => e.stopPropagation()}
                    type={type || "text"}
                    id="form-name"
                    placeholder={placeholder || "Enter text here..."}
                    className={`w-full p-2 border rounded-sm  ${inputStyle}`}
                    value={textValue || ""}
                    onChange={inputChange}
                />
            ) : (
                <Textarea
                    placeholder={placeholder || "Enter text here..."}
                    className={`w-full p-2 border rounded-sm  ${inputStyle}`}
                    value={textValue || ""}
                    onChange={inputChange}
                />
            )}
        </div>
    );
};

export default TextInput;
