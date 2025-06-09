import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X, Image } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
    onFileSelect: (file: File | null) => void;
    accept?: string;
    maxSize?: number; // in MB
    currentFile?: string;
    placeholder?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
    onFileSelect,
    accept = "image/*",
    maxSize = 5,
    currentFile,
    placeholder = "Upload file",
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFiles = (files: FileList | null) => {
        if (!files || files.length === 0) return;

        const file = files[0];

        // Check file size
        if (file.size > maxSize * 1024 * 1024) {
            // toast({
            //     title: "File too large",
            //     description: `File size must be less than ${maxSize}MB`,
            //     variant: "destructive",
            // });
            return;
        }

        onFileSelect(file);
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const removeFile = () => {
        onFileSelect(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <Card
            className={`border-2 border-dashed transition-colors ${
                dragActive
                    ? "border-blue-400 bg-blue-50"
                    : currentFile
                    ? "border-green-300 bg-green-50"
                    : "border-gray-300"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <div className="p-6">
                {currentFile ? (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Image className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="font-medium text-green-800">
                                    File uploaded
                                </p>
                                <p className="text-sm text-green-600">
                                    {currentFile}
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={removeFile}
                            className="text-red-600 hover:text-red-700"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                ) : (
                    <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-900">
                                {placeholder}
                            </p>
                            <p className="text-xs text-gray-500">
                                Drag and drop or click to browse (max {maxSize}
                                MB)
                            </p>
                        </div>
                        <Button
                            type="button"
                            variant="outline"
                            className="mt-4"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            Browse Files
                        </Button>
                    </div>
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    onChange={(e) => handleFiles(e.target.files)}
                    className="hidden"
                />
            </div>
        </Card>
    );
};

export default FileUpload;
