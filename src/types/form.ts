export interface IForms {
    id: number;
    formName: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    fields: TypeFormField[];
}

export type TFieldType = "text" | "checkbox" | "radio" | "table" | "select";
export interface BaseField {
    order: number;
    id: number;
    type: TFieldType;
    required?: boolean;
    placeholder?: string;
    label: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface TTextField extends BaseField {
    type: "text";
    multiline?: boolean;
}

export interface ICheckboxOption {
    id: number;
    label: string;
    createdAt?: Date;
    updatedAt?: Date;
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
    options: ICheckboxOption[];
}

export interface SelectField extends BaseField {
    type: "select";
    options: ICheckboxOption[];
}

export interface INewForm {
    formName: string;
    description: string;
    formSections: TFormSection[];
}

export interface TFormSection {
    id: number;
    sectionName?: string;
    sectionDescription?: string;
    fields: TypeFormField[];
}

export type TypeFormField =
    | TTextField
    | CheckboxField
    | RadioField
    | TableField
    | SelectField;
