import { ICheckboxOption, TypeFormField } from "@/types/form";

export type TFieldProps = {
    sectionIdx: number;
    onChange: (
        id: number,
        sectionIdx: number,
        valueName: string,
        value: string | boolean | ICheckboxOption[]
    ) => void;

    field: TypeFormField;

    deleteAction: (e: any, id: number, sectionIdx: number) => void;
};
