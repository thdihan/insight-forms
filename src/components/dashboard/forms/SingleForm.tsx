import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IForms } from "@/types/form";
import { Edit, Eye, MoreHorizontal, Share, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

type Props = {
    viewMode: string;
    form: any;
    handleDeleteForm: (formId: number, formName: string) => void;
};

const SingleForm = ({ viewMode, form, handleDeleteForm }: Props) => {
    const copyShareLink = (formId: number) => {
        const shareLink = `${window.location.origin}/form/${formId}`;
        navigator.clipboard.writeText(shareLink);
        toast("Link copied!", {
            description: "Link copied!",
            action: {
                label: "Close",
                onClick: () => console.log("Closing..."),
            },
        });
    };

    return (
        <>
            {viewMode === "grid" ? (
                <Card
                    key={form.id}
                    className="hover:shadow-md transition-shadow"
                >
                    <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                                    {form.formName}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-500 line-clamp-2">
                                    {form.description}
                                </CardDescription>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                    >
                                        <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href={`/forms/details/${form.id}`}
                                            className="flex items-center"
                                        >
                                            <Eye className="w-4 h-4 mr-2" />
                                            View Details
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href={`/forms/edit/${form.id}`}
                                            className="flex items-center"
                                        >
                                            <Edit className="w-4 h-4 mr-2" />
                                            Edit Form
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => copyShareLink(form?.id)}
                                    >
                                        <Share className="w-4 h-4 mr-2" />
                                        Copy Share Link
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleDeleteForm(
                                                form.id,
                                                form.formName
                                            )
                                        }
                                        className="text-red-600"
                                    >
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">
                                    Submissions
                                </span>
                                <span className="font-medium">
                                    {/* {form?.submissions} */}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">
                                    Last updated
                                </span>
                                <span className="font-medium">
                                    {/* {form.updatedAt} */}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                {/* <Badge
                                            variant={
                                                form.isPublished
                                                    ? "default"
                                                    : "secondary"
                                            }
                                        >
                                            {form.isPublished
                                                ? "Published"
                                                : "Draft"}
                                        </Badge> */}
                                <div className="flex gap-1">
                                    <Link href={`/forms/details/${form.id}`}>
                                        <Button variant="outline" size="sm">
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                    <Link href={`/forms/edit/${form.id}`}>
                                        <Button variant="outline" size="sm">
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <tr key={form.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                        <div className="font-medium text-gray-900">
                            {form.formName}
                        </div>
                    </td>
                    <td className="p-4">
                        <div className="text-gray-500 max-w-xs truncate">
                            {form.description}
                        </div>
                    </td>
                    <td className="p-4">
                        <div className="font-medium">
                            {/* {form.submissions} */}
                        </div>
                    </td>
                    <td className="p-4">
                        {/* <Badge
                                                    variant={
                                                        form.isPublished
                                                            ? "default"
                                                            : "secondary"
                                                    }
                                                >
                                                    {form.isPublished
                                                        ? "Published"
                                                        : "Draft"}
                                                </Badge> */}
                    </td>
                    <td className="p-4">
                        <div className="text-gray-500">
                            {/* {form.updatedAt} */}
                        </div>
                    </td>
                    <td className="p-4">
                        <div className="flex items-center justify-end gap-1">
                            <Link href={`/forms/details/${form.id}`}>
                                <Button variant="ghost" size="sm">
                                    <Eye className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href={`/forms/edit/${form.id}`}>
                                <Button variant="ghost" size="sm">
                                    <Edit className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyShareLink(form.id)}
                            >
                                <Share className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                    handleDeleteForm(form.id, form.formName)
                                }
                                className="text-red-600 hover:text-red-700"
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export default SingleForm;
