import React from "react";
import TextInput from "../dashboard/inputs/TextInput";
import { TypeFormField } from "@/types/form";

type Props = {
    field: TypeFormField;
    value: string;
    handleChange: (e: any) => void;
};

const TextField = ({ field, handleChange, value }: Props) => {
    return (
        <TextInput
            placeholder={field.placeholder}
            label={field.label}
            textValue={value}
            inputChange={handleChange}
            multiline={field.type == "text" && field.multiline}
        />
    );
};

export default TextField;
