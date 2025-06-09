import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
    Bold,
    Italic,
    Link,
    Image,
    AlignLeft,
    AlignCenter,
    AlignRight,
} from "lucide-react";

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    value,
    onChange,
    placeholder,
}) => {
    const [isPreview, setIsPreview] = useState(false);

    const insertMarkdown = (syntax: string, placeholder = "") => {
        const textarea = document.querySelector(
            "textarea"
        ) as HTMLTextAreaElement;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = value.substring(start, end) || placeholder;
        const beforeText = value.substring(0, start);
        const afterText = value.substring(end);

        let newText = "";
        switch (syntax) {
            case "bold":
                newText = `${beforeText}**${selectedText}**${afterText}`;
                break;
            case "italic":
                newText = `${beforeText}_${selectedText}_${afterText}`;
                break;
            case "link":
                newText = `${beforeText}[${
                    selectedText || "link text"
                }](url)${afterText}`;
                break;
            case "image":
                newText = `${beforeText}![${
                    selectedText || "alt text"
                }](image-url)${afterText}`;
                break;
            default:
                newText = value;
        }

        onChange(newText);
    };

    const renderPreview = (text: string) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/_(.*?)_/g, "<em>$1</em>")
            .replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2" class="text-blue-600 underline">$1</a>'
            )
            .replace(
                /!\[([^\]]*)\]\(([^)]+)\)/g,
                '<img src="$2" alt="$1" class="max-w-full h-auto" />'
            );
    };

    return (
        <Card className="border-2 border-dashed border-gray-200">
            <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertMarkdown("bold", "bold text")}
                        >
                            <Bold className="w-4 h-4" />
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                insertMarkdown("italic", "italic text")
                            }
                        >
                            <Italic className="w-4 h-4" />
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertMarkdown("link")}
                        >
                            <Link className="w-4 h-4" />
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertMarkdown("image")}
                        >
                            <Image className="w-4 h-4" />
                        </Button>
                    </div>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setIsPreview(!isPreview)}
                    >
                        {isPreview ? "Edit" : "Preview"}
                    </Button>
                </div>

                {isPreview ? (
                    <div
                        className="min-h-[120px] p-3 bg-gray-50 rounded-md prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: renderPreview(value),
                        }}
                    />
                ) : (
                    <Textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        className="min-h-[120px] resize-none"
                    />
                )}

                <div className="text-xs text-gray-500">
                    Supports: **bold**, _italic_, [links](url), ![images](url)
                </div>
            </div>
        </Card>
    );
};

export default RichTextEditor;
