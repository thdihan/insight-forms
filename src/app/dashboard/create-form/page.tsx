import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
    Plus,
    Trash2,
    GripVertical,
    Save,
    Eye,
    FolderPlus,
} from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TFieldType, TFormSection, TypeFormField } from "@/types/form";

const CreateForm = () => {
    const router = useRouter();

    const [formName, setFormName] = useState("");
    const [formDescription, setFormDescription] = useState("");
    const [formLogo, setFormLogo] = useState<File | null>(null);
    const [sections, setSections] = useState<TFormSection[]>([]);

    const fieldTypes = [
        { value: "text", label: "Text Input" },
        { value: "email", label: "Email" },
        { value: "textarea", label: "Text Area" },
        { value: "select", label: "Select Dropdown" },
        { value: "radio", label: "Radio Buttons" },
        { value: "checkbox", label: "Checkboxes" },
        { value: "date", label: "Date" },
        { value: "number", label: "Number" },
        { value: "file", label: "File Upload" },
        { value: "table", label: "Table" },
    ];

    const addSection = () => {
        const newSection: TFormSection = {
            id: sections.length + 1,
            sectionName: "",
            sectionDescription: "",
            fields: [],
        };
        setSections([...sections, newSection]);
    };

    const updateSection = (
        sectionId: number,
        updates: Partial<TFormSection>
    ) => {
        setSections(
            sections.map((section) =>
                section.id === sectionId ? { ...section, ...updates } : section
            )
        );
    };

    const removeSection = (sectionId: number) => {
        setSections(sections.filter((section) => section.id !== sectionId));
    };

    const addField = (sectionId: number, fieldType: string) => {
        const tempSection = sections.find(
            (section) => section.id === sectionId
        );
        const newField: TypeFormField = {
            id: tempSection?.fields ? tempSection?.fields.length + 1 : 0,
            type: fieldType as TFieldType,
            label: "",
            placeholder: "",
            required: false,
            options:
                fieldType === "select" ||
                fieldType === "radio" ||
                fieldType === "checkbox"
                    ? [""]
                    : undefined,
            tableColumns: fieldType === "table" ? [""] : undefined,
        };

        setSections(
            sections.map((section) =>
                section.id === sectionId
                    ? { ...section, fields: [...section.fields, newField] }
                    : section
            )
        );
    };

    const updateField = (
        sectionId: string,
        fieldId: string,
        updates: Partial<TypeFormField>
    ) => {
        setSections(
            sections.map((section) =>
                section.id === sectionId
                    ? {
                          ...section,
                          fields: section.fields.map((field) =>
                              field.id === fieldId
                                  ? { ...field, ...updates }
                                  : field
                          ),
                      }
                    : section
            )
        );
    };

    const removeField = (sectionId: string, fieldId: string) => {
        setSections(
            sections.map((section) =>
                section.id === sectionId
                    ? {
                          ...section,
                          fields: section.fields.filter(
                              (field) => field.id !== fieldId
                          ),
                      }
                    : section
            )
        );
    };

    const addOption = (sectionId: string, fieldId: string) => {
        const section = sections.find((s) => s.id === sectionId);
        const field = section?.fields.find((f) => f.id === fieldId);
        if (field) {
            const newOptions = [...(field.options || []), ""];
            updateField(sectionId, fieldId, { options: newOptions });
        }
    };

    const updateOption = (
        sectionId: string,
        fieldId: string,
        optionIndex: number,
        value: string
    ) => {
        const section = sections.find((s) => s.id === sectionId);
        const field = section?.fields.find((f) => f.id === fieldId);
        if (field) {
            const newOptions = [...(field.options || [])];
            newOptions[optionIndex] = value;
            updateField(sectionId, fieldId, { options: newOptions });
        }
    };

    const removeOption = (
        sectionId: string,
        fieldId: string,
        optionIndex: number
    ) => {
        const section = sections.find((s) => s.id === sectionId);
        const field = section?.fields.find((f) => f.id === fieldId);
        if (field) {
            const newOptions =
                field.options?.filter((_, index) => index !== optionIndex) ||
                [];
            updateField(sectionId, fieldId, { options: newOptions });
        }
    };

    const addTableColumn = (sectionId: string, fieldId: string) => {
        const section = sections.find((s) => s.id === sectionId);
        const field = section?.fields.find((f) => f.id === fieldId);
        if (field) {
            const newColumns = [...(field.tableColumns || []), ""];
            updateField(sectionId, fieldId, { tableColumns: newColumns });
        }
    };

    const updateTableColumn = (
        sectionId: string,
        fieldId: string,
        columnIndex: number,
        value: string
    ) => {
        const section = sections.find((s) => s.id === sectionId);
        const field = section?.fields.find((f) => f.id === fieldId);
        if (field) {
            const newColumns = [...(field.tableColumns || [])];
            newColumns[columnIndex] = value;
            updateField(sectionId, fieldId, { tableColumns: newColumns });
        }
    };

    const removeTableColumn = (
        sectionId: string,
        fieldId: string,
        columnIndex: number
    ) => {
        const section = sections.find((s) => s.id === sectionId);
        const field = section?.fields.find((f) => f.id === fieldId);
        if (field) {
            const newColumns =
                field.tableColumns?.filter(
                    (_, index) => index !== columnIndex
                ) || [];
            updateField(sectionId, fieldId, { tableColumns: newColumns });
        }
    };

    const handleSave = (published = false) => {
        if (!formName.trim()) {
            toast("Error: Please enter a form name.");
            return;
        }

        if (sections.length === 0) {
            toast("Error: Please add at least one section to your form.");
            return;
        }

        const formData = {
            name: formName,
            description: formDescription,
            sections,
            isPublished: published,
        };

        const formId = createForm(formData);

        toast(published ? "Form published!" : "Form saved!");

        router.push(`/forms/details/${formId}`);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Create New Form
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Build your form with sections and fields
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={() => handleSave(false)}>
                        <Save className="w-4 h-4 mr-2" />
                        Save Draft
                    </Button>
                    <Button onClick={() => handleSave(true)}>
                        <Eye className="w-4 h-4 mr-2" />
                        Publish Form
                    </Button>
                </div>
            </div>

            {/* Form Settings */}
            <Card>
                <CardHeader>
                    <CardTitle>Form Settings</CardTitle>
                    <CardDescription>
                        Configure your form's basic information and branding
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="formName">Form Name *</Label>
                                <Input
                                    id="formName"
                                    placeholder="Enter form name..."
                                    value={formName}
                                    onChange={(e) =>
                                        setFormName(e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <Label>Form Logo</Label>
                                <FileUpload
                                    onFileSelect={setFormLogo}
                                    accept="image/*"
                                    maxSize={2}
                                    currentFile={formLogo?.name}
                                    placeholder="Upload form logo"
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="formDescription">
                                Form Description
                            </Label>
                            <RichTextEditor
                                value={formDescription}
                                onChange={setFormDescription}
                                placeholder="Describe your form and add your branding. You can use **bold**, _italic_, [links](url), and ![images](url) for rich formatting."
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Form Sections */}
            <Card>
                <CardHeader>
                    <CardTitle>Form Sections</CardTitle>
                    <CardDescription>
                        Organize your form into sections with related fields
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {sections.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-500 mb-4">
                                No sections added yet. Start building your form!
                            </p>
                            <Button onClick={addSection}>
                                <FolderPlus className="w-4 h-4 mr-2" />
                                Add First Section
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {sections.map((section, sectionIndex) => (
                                <div
                                    key={section.id}
                                    className="border-2 border-dashed border-gray-200 rounded-lg p-6 space-y-4"
                                >
                                    {/* Section Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <GripVertical className="w-4 h-4 text-gray-400" />
                                            <span className="font-medium text-lg text-gray-700">
                                                Section {sectionIndex + 1}
                                            </span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() =>
                                                removeSection(section.id)
                                            }
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    {/* Section Settings */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <Label>Section Name *</Label>
                                            <Input
                                                placeholder="Enter section name..."
                                                value={section.name}
                                                onChange={(e) =>
                                                    updateSection(section.id, {
                                                        name: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <Label>
                                                Section Description (Optional)
                                            </Label>
                                            <Input
                                                placeholder="Brief description of this section..."
                                                value={
                                                    section.description || ""
                                                }
                                                onChange={(e) =>
                                                    updateSection(section.id, {
                                                        description:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>

                                    {/* Add Field Buttons */}
                                    <div className="space-y-4">
                                        <h4 className="font-medium text-gray-700">
                                            Add fields to this section:
                                        </h4>
                                        <FieldTypeButtons
                                            onAddField={(type) =>
                                                addField(section.id, type)
                                            }
                                        />
                                    </div>

                                    {/* Section Fields */}
                                    {section.fields.length > 0 && (
                                        <div className="space-y-3 mt-6">
                                            <h4 className="font-medium text-gray-700">
                                                Fields in this section:
                                            </h4>
                                            {section.fields.map(
                                                (field, fieldIndex) => (
                                                    <div
                                                        key={field.id}
                                                        className="bg-white border rounded-lg p-4 space-y-3"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <GripVertical className="w-4 h-4 text-gray-400" />
                                                                <span className="text-sm font-medium text-gray-600">
                                                                    Field{" "}
                                                                    {fieldIndex +
                                                                        1}
                                                                </span>
                                                            </div>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() =>
                                                                    removeField(
                                                                        section.id,
                                                                        field.id
                                                                    )
                                                                }
                                                                className="text-red-600 hover:text-red-700"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </Button>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                            <div>
                                                                <Label>
                                                                    Field Type
                                                                </Label>
                                                                <Select
                                                                    value={
                                                                        field.type
                                                                    }
                                                                    onValueChange={(
                                                                        value
                                                                    ) =>
                                                                        updateField(
                                                                            section.id,
                                                                            field.id,
                                                                            {
                                                                                type: value as FormField["type"],
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    <SelectTrigger>
                                                                        <SelectValue />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        {fieldTypes.map(
                                                                            (
                                                                                type
                                                                            ) => (
                                                                                <SelectItem
                                                                                    key={
                                                                                        type.value
                                                                                    }
                                                                                    value={
                                                                                        type.value
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        type.label
                                                                                    }
                                                                                </SelectItem>
                                                                            )
                                                                        )}
                                                                    </SelectContent>
                                                                </Select>
                                                            </div>

                                                            <div>
                                                                <Label>
                                                                    Label *
                                                                </Label>
                                                                <Input
                                                                    placeholder="Field label"
                                                                    value={
                                                                        field.label
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        updateField(
                                                                            section.id,
                                                                            field.id,
                                                                            {
                                                                                label: e
                                                                                    .target
                                                                                    .value,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            </div>

                                                            <div>
                                                                <Label>
                                                                    Placeholder
                                                                </Label>
                                                                <Input
                                                                    placeholder="Field placeholder"
                                                                    value={
                                                                        field.placeholder ||
                                                                        ""
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        updateField(
                                                                            section.id,
                                                                            field.id,
                                                                            {
                                                                                placeholder:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            </div>

                                                            <div className="flex items-center space-x-2">
                                                                <Switch
                                                                    checked={
                                                                        field.required
                                                                    }
                                                                    onCheckedChange={(
                                                                        checked
                                                                    ) =>
                                                                        updateField(
                                                                            section.id,
                                                                            field.id,
                                                                            {
                                                                                required:
                                                                                    checked,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                                <Label>
                                                                    Required
                                                                    field
                                                                </Label>
                                                            </div>
                                                        </div>

                                                        {/* Options for select, radio, checkbox fields */}
                                                        {[
                                                            "select",
                                                            "radio",
                                                            "checkbox",
                                                        ].includes(
                                                            field.type
                                                        ) && (
                                                            <div>
                                                                <Label>
                                                                    Options
                                                                </Label>
                                                                <div className="space-y-2">
                                                                    {field.options?.map(
                                                                        (
                                                                            option,
                                                                            optionIndex
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    optionIndex
                                                                                }
                                                                                className="flex items-center gap-2"
                                                                            >
                                                                                <Input
                                                                                    placeholder={`Option ${
                                                                                        optionIndex +
                                                                                        1
                                                                                    }`}
                                                                                    value={
                                                                                        option
                                                                                    }
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        updateOption(
                                                                                            section.id,
                                                                                            field.id,
                                                                                            optionIndex,
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                />
                                                                                <Button
                                                                                    variant="ghost"
                                                                                    size="sm"
                                                                                    onClick={() =>
                                                                                        removeOption(
                                                                                            section.id,
                                                                                            field.id,
                                                                                            optionIndex
                                                                                        )
                                                                                    }
                                                                                    className="text-red-600"
                                                                                >
                                                                                    <Trash2 className="w-4 h-4" />
                                                                                </Button>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                    <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        onClick={() =>
                                                                            addOption(
                                                                                section.id,
                                                                                field.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <Plus className="w-4 h-4 mr-2" />
                                                                        Add
                                                                        Option
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Table columns for table fields */}
                                                        {field.type ===
                                                            "table" && (
                                                            <div>
                                                                <Label>
                                                                    Table
                                                                    Columns
                                                                </Label>
                                                                <div className="space-y-2">
                                                                    {field.tableColumns?.map(
                                                                        (
                                                                            column,
                                                                            columnIndex
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    columnIndex
                                                                                }
                                                                                className="flex items-center gap-2"
                                                                            >
                                                                                <Input
                                                                                    placeholder={`Column ${
                                                                                        columnIndex +
                                                                                        1
                                                                                    }`}
                                                                                    value={
                                                                                        column
                                                                                    }
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        updateTableColumn(
                                                                                            section.id,
                                                                                            field.id,
                                                                                            columnIndex,
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                />
                                                                                <Button
                                                                                    variant="ghost"
                                                                                    size="sm"
                                                                                    onClick={() =>
                                                                                        removeTableColumn(
                                                                                            section.id,
                                                                                            field.id,
                                                                                            columnIndex
                                                                                        )
                                                                                    }
                                                                                    className="text-red-600"
                                                                                >
                                                                                    <Trash2 className="w-4 h-4" />
                                                                                </Button>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                    <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        onClick={() =>
                                                                            addTableColumn(
                                                                                section.id,
                                                                                field.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <Plus className="w-4 h-4 mr-2" />
                                                                        Add
                                                                        Column
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <Button
                                onClick={addSection}
                                variant="outline"
                                className="w-full"
                            >
                                <FolderPlus className="w-4 h-4 mr-2" />
                                Add Section
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateForm;
