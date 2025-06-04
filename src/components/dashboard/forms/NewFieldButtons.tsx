import React from "react";
import {
    Type,
    CheckSquare,
    RadioIcon,
    Table,
    CircleDot,
    TextCursorInput,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    addField: (e: any, type: string, sectionIdx: number) => void;
    sectionIdx: number;
};

const NewFieldButtons = ({ addField, sectionIdx }: Props) => {
    const fieldTypes = [
        {
            type: "text" as const,
            label: "Text Input",
            icon: Type,
            description: "Single or multi-line text input",
        },
        {
            type: "checkbox" as const,
            label: "Checkbox",
            icon: CheckSquare,
            description: "Multiple choice selection",
        },
        {
            type: "radio" as const,
            label: "Radio Button",
            icon: CircleDot,
            description: "Single choice selection",
        },
        {
            type: "table" as const,
            label: "Table",
            icon: Table,
            description: "Dynamic table with custom columns",
        },
        {
            type: "select" as const,
            label: "Select",
            icon: TextCursorInput,
            description: "Select options",
        },
    ];

    return (
        <div className="flex gap-2 flex-wrap">
            {fieldTypes.map((fieldType) => {
                const Icon = fieldType.icon;
                return (
                    <Button
                        key={fieldType.type}
                        onClick={(e) => addField(e, fieldType.type, sectionIdx)}
                        variant="outline"
                        className="h-auto p-3 flex flex-col items-start text-left hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer flex-1"
                        // onClick={() => onAddField(fieldType.type)}
                    >
                        <div className="flex items-center gap-1 mb-2">
                            <Icon className="w-6 h-6 text-black" />
                            <span className="font-semibold">
                                Add {fieldType.label}
                            </span>
                        </div>
                        <span className="text-sm text-gray-500">
                            {fieldType.description}
                        </span>
                    </Button>
                );
            })}
        </div>
    );
};

export default NewFieldButtons;
