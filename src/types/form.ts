export interface BaseField {
    order: number;
    id: string;
    type: "text" | "checkbox" | "radio" | "table";
    required?: boolean;
    placeholder?: string;
    label: string;
}

export interface TTextField extends BaseField {
    type: "text";
    multiline?: boolean;
}

export interface ICheckboxOption {
    id: string;
    label: string;
}
export interface CheckboxField extends BaseField {
    type: "checkbox";
    options: ICheckboxOption[];
}

export interface RadioField extends BaseField {
    type: "radio";
    options: ICheckboxOption[];
}

export interface TableField extends BaseField {
    type: "table";
    columns: ICheckboxOption[];
}

export type TypeFormField =
    | TTextField
    | CheckboxField
    | RadioField
    | TableField;
