import React, { ReactNode } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type Props = {
    label: string;
    name: string;
    type?: string;
    className?: string;
    placeholder?: string;
    Icon?: ReactNode;
    inputClass?: string;
    value: string;
    setValue: (val: string) => void;
    required?: boolean;
};

const TextInput = ({
    label,
    name,
    type = "text",
    className,
    placeholder = "Enter text",
    Icon,
    inputClass,
    value,
    setValue,
    required = false,
}: Props) => {
    return (
        <div className={className}>
            <div className="flex">
                <Label htmlFor={name}>{label}</Label>{" "}
                {required && <span className="text-red-500 pl-1"> *</span>}
            </div>
            <div className="relative">
                {Icon}
                <Input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={inputClass}
                    required={required}
                />
            </div>
        </div>
    );
};

export default TextInput;
