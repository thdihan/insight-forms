export interface BaseField {
    id: string;
    type: "text" | "checkbox" | "radio" | "table";
    label: string;
    required?: boolean;
    placeholder?: string;
}

export interface TextField extends BaseField {
    type: "text";
    multiline?: boolean;
}

export interface CheckboxField extends BaseField {
    type: "checkbox";
    options: string[];
}

export interface RadioField extends BaseField {
    type: "radio";
    options: string[];
}

export interface TableColumn {
    id: string;
    label: string;
    type: "text" | "number" | "select";
    options?: string[];
    required?: boolean;
}

export interface TableField extends BaseField {
    type: "table";
    columns: TableColumn[];
    minRows?: number;
    maxRows?: number;
}

export type TypeFormField = TextField | CheckboxField | RadioField | TableField;
