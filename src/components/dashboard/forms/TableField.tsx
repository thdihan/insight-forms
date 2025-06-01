import { ChevronDown, ChevronUp, GripVertical, Plus } from "lucide-react";
import React, { useState } from "react";
import TextInput from "../inputs/TextInput";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ICheckboxOption, TypeFormField } from "@/types/form";
import SortableFieldWrapper from "./SortableFieldWrapper";

type Props = {
    field: TypeFormField;
    onChange: (
        id: string,
        valueName: string,
        value: string | boolean | ICheckboxOption[]
    ) => void;
};

const TableField = ({ field, onChange }: Props) => {
    const [expanded, setExpanded] = useState(false);

    const addTableOption = () => {
        if (field.type === "table" && Array.isArray(field.columns)) {
            const tempField = { ...field };
            tempField.columns = [
                ...field.columns,
                {
                    id: (field.columns.length + 1).toString(),
                    label: "",
                },
            ];
            onChange(field.id, "columns", tempField.columns);
        }
    };

    const updateTableOption = (id: string, value: string) => {
        if (field.type === "table" && Array.isArray(field.columns)) {
            const tempField = { ...field };
            tempField.columns = tempField.columns.filter(
                (option) => option.id !== id
            );
            tempField.columns.push({ id, label: value });
            onChange(field.id, "columns", tempField.columns);
        }
    };
    return (
        <SortableFieldWrapper id={field.id} type={field.type}>
            <TextInput
                placeholder={"Enter Table name..."}
                label="Table name."
                textValue={field.label}
                inputChange={(e) => onChange(field.id, "label", e.target.value)}
            />
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col gap-y-4 ms-4 border-s-2 border-gray-300 border-dashed ps-4"
            >
                {field.type === "table" &&
                    field.columns.length > 0 &&
                    field.columns
                        .sort((a, b) => parseInt(a.id) - parseInt(b.id))
                        .map((option, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-x-4"
                            >
                                <Label id="terms-2">Column {index + 1}</Label>
                                <TextInput
                                    placeholder={"Enter Option..."}
                                    label=""
                                    textValue={option.label}
                                    inputChange={(e) =>
                                        updateTableOption(
                                            option.id,
                                            e.target.value
                                        )
                                    }
                                    labelStyle="hidden"
                                />
                            </div>
                        ))}

                <div>
                    <Button
                        className="cursor-pointer"
                        variant="outline"
                        onClick={addTableOption}
                    >
                        <Plus />
                        Add options
                    </Button>
                </div>
            </div>
        </SortableFieldWrapper>
        // <div <TextInput
        //             placeholder={"Enter Table name..."}
        //             label="Table name."
        //             textValue={field.label}
        //             inputChange={(e) =>
        //                 onChange(field.id, "label", e.target.value)
        //             }
        //         />
        //     onClick={() => setExpanded((prev) => !prev)}
        //     className="px-3 py-4 border-s-4 border-s-black rounded-md border flex gap-x-4 items-center"
        // >
        //     <GripVertical className="w-5 h-5" />
        //     <div className="space-y-4 flex-1">
        //         <TextInput
        //             placeholder={"Enter Table name..."}
        //             label="Table name."
        //             textValue={field.label}
        //             inputChange={(e) =>
        //                 onChange(field.id, "label", e.target.value)
        //             }
        //         />
        //         {expanded && (
        //             <div
        //                 onClick={(e) => e.stopPropagation()}
        //                 className="flex flex-col gap-y-4 ms-4 border-s-2 border-gray-300 border-dashed ps-4"
        //             >
        //                 {field.type === "table" &&
        //                     field.columns.length > 0 &&
        //                     field.columns
        //                         .sort((a, b) => parseInt(a.id) - parseInt(b.id))
        //                         .map((option, index) => (
        //                             <div
        //                                 key={index}
        //                                 className="flex items-center gap-x-4"
        //                             >
        //                                 <Label id="terms-2">
        //                                     Column {index + 1}
        //                                 </Label>
        //                                 <TextInput
        //                                     placeholder={"Enter Option..."}
        //                                     label=""
        //                                     textValue={option.label}
        //                                     inputChange={(e) =>
        //                                         updateTableOption(
        //                                             option.id,
        //                                             e.target.value
        //                                         )
        //                                     }
        //                                     labelStyle="hidden"
        //                                 />
        //                             </div>
        //                         ))}

        //                 <div>
        //                     <Button
        //                         className="cursor-pointer"
        //                         variant="outline"
        //                         onClick={addTableOption}
        //                     >
        //                         <Plus />
        //                         Add options
        //                     </Button>
        //                 </div>
        //             </div>
        //         )}
        //     </div>
        //     <div className="ml-auto pt-1 items-start cursor-pointer">
        //         {expanded ? (
        //             <ChevronUp className="w-5 h-5 text-muted-foreground" />
        //         ) : (
        //             <ChevronDown className="w-5 h-5 text-muted-foreground" />
        //         )}
        //     </div>
        // </div>
    );
};

export default TableField;
