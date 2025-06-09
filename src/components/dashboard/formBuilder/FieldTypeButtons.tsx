import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    FileText,
    CheckSquare,
    RadioIcon as Radio,
    Table,
    ChevronDown,
    Calendar,
    Hash,
    Upload,
} from "lucide-react";

interface FieldType {
    type: string;
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

interface FieldTypeButtonsProps {
    onAddField: (type: string) => void;
}

const FieldTypeButtons: React.FC<FieldTypeButtonsProps> = ({ onAddField }) => {
    const fieldTypes: FieldType[] = [
        {
            type: "text",
            label: "Add Text Input",
            description: "Single or multi-line text input",
            icon: FileText,
        },
        {
            type: "checkbox",
            label: "Add Checkbox",
            description: "Multiple choice selection",
            icon: CheckSquare,
        },
        {
            type: "radio",
            label: "Add Radio Button",
            description: "Single choice selection",
            icon: Radio,
        },
        {
            type: "table",
            label: "Add Table",
            description: "Dynamic table with custom columns",
            icon: Table,
        },
        {
            type: "select",
            label: "Add Select",
            description: "Select options",
            icon: ChevronDown,
        },
        {
            type: "date",
            label: "Add Date",
            description: "Date picker input",
            icon: Calendar,
        },
        {
            type: "number",
            label: "Add Number",
            description: "Numeric input field",
            icon: Hash,
        },
        {
            type: "file",
            label: "Add File Upload",
            description: "File or image upload",
            icon: Upload,
        },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {fieldTypes.map((fieldType) => {
                const IconComponent = fieldType.icon;
                return (
                    <Card
                        key={fieldType.type}
                        className="p-4 cursor-pointer hover:shadow-md transition-shadow border-2 border-gray-100 hover:border-blue-200"
                        onClick={() => onAddField(fieldType.type)}
                    >
                        <div className="flex flex-col items-center text-center space-y-2">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                            <div>
                                <p className="font-medium text-sm text-gray-900">
                                    {fieldType.label}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {fieldType.description}
                                </p>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};

export default FieldTypeButtons;
