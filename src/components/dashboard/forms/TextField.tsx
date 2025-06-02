import { GripVertical } from "lucide-react";
import React, { ChangeEvent } from "react";
import TextInput from "../inputs/TextInput";
import SwitchInput from "../inputs/SwitchInput";
import { ICheckboxOption, TTextField } from "@/types/form";
import { useSortable } from "@dnd-kit/sortable";
import SortableFieldWrapper from "./SortableFieldWrapper";

type Props = {
    field: TTextField;
    onChange: (
        id: number,
        valueName: string,
        value: string | boolean | ICheckboxOption[]
    ) => void;
    deleteAction: (e: any, id: number) => void;
};

const TextField = ({ field, onChange, deleteAction }: Props) => {
    return (
        <SortableFieldWrapper
            id={field.id}
            type={field.type}
            deleteAction={deleteAction}
        >
            <div
                className="space-y-4 flex-1 transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                <TextInput
                    placeholder="Enter Name"
                    label="Field Name"
                    textValue={field.label}
                    inputChange={(e) =>
                        onChange(field.id, "label", e.target.value)
                    }
                />
                <div onClick={(e) => e.stopPropagation()}></div>
                <TextInput
                    placeholder="Enter Placeholder"
                    label="Placeholder"
                    textValue={field.placeholder}
                    inputChange={(e) =>
                        onChange(field.id, "placeholder", e.target.value)
                    }
                />
                <div className="flex gap-x-4">
                    <SwitchInput
                        label="Required"
                        checked={field.required}
                        changeChecked={(checked: boolean) =>
                            onChange(field.id, "required", checked)
                        }
                    />
                    <SwitchInput
                        label="Multi line input"
                        checked={field.multiline}
                        changeChecked={(checked: boolean) =>
                            onChange(field.id, "multiline", checked)
                        }
                    />
                </div>
            </div>
        </SortableFieldWrapper>
    );
};

export default TextField;
