"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Grid, List } from "lucide-react";

import { toast } from "sonner";
import Link from "next/link";
import { deleteForm, getForms } from "@/actions/forms";
import SingleForm from "@/components/dashboard/forms/SingleForm";

const Forms = () => {
    const [forms, setForms] = useState<Awaited<ReturnType<typeof getForms>>>(
        []
    );
    const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

    useEffect(() => {
        const fetchForms = async () => {
            const fetchedForms = await getForms();
            setForms(fetchedForms);
        };
        fetchForms();
    }, []);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredForms = forms.filter(
        (form) =>
            form.formName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            form.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteForm = async (formId: number, formName: string) => {
        if (
            window.confirm(
                `Are you sure you want to delete "${formName}"? This action cannot be undone.`
            )
        ) {
            deleteForm(formId);
            toast("Form deleted", {
                description: "Form deleted",
                action: {
                    label: "Close",
                    onClick: () => console.log("Closing..."),
                },
            });

            const fetchedForms = await getForms();
            setForms(fetchedForms);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Forms</h1>
                    <p className="text-gray-600 mt-1">
                        Manage and organize all your forms
                    </p>
                </div>
                <Link href="/forms/create">
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        Create New Form
                    </Button>
                </Link>
            </div>

            {/* Search and View Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                        placeholder="Search forms..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant={viewMode === "grid" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setViewMode("grid")}
                    >
                        <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={viewMode === "table" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setViewMode("table")}
                    >
                        <List className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Forms Display */}
            {filteredForms.length === 0 ? (
                <Card>
                    <CardContent className="text-center py-12">
                        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <Plus className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {forms.length === 0
                                ? "No forms yet"
                                : "No forms found"}
                        </h3>
                        <p className="text-gray-500 mb-6">
                            {forms.length === 0
                                ? "Get started by creating your first form"
                                : "Try adjusting your search terms"}
                        </p>
                        {forms.length === 0 && (
                            <Link href="/forms/create">
                                <Button>Create Your First Form</Button>
                            </Link>
                        )}
                    </CardContent>
                </Card>
            ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredForms.map((form, index) => (
                        <SingleForm
                            key={index}
                            form={form}
                            viewMode="grid"
                            handleDeleteForm={handleDeleteForm}
                        />
                    ))}
                </div>
            ) : (
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-4 font-medium text-gray-900">
                                            Form Name
                                        </th>
                                        <th className="text-left p-4 font-medium text-gray-900">
                                            Description
                                        </th>
                                        <th className="text-left p-4 font-medium text-gray-900">
                                            Submissions
                                        </th>
                                        <th className="text-left p-4 font-medium text-gray-900">
                                            Status
                                        </th>
                                        <th className="text-left p-4 font-medium text-gray-900">
                                            Updated
                                        </th>
                                        <th className="text-right p-4 font-medium text-gray-900">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredForms.map((form, index) => (
                                        <SingleForm
                                            key={index}
                                            form={form}
                                            viewMode="table"
                                            handleDeleteForm={handleDeleteForm}
                                        />
                                        // <tr
                                        //     key={form.id}
                                        //     className="border-b hover:bg-gray-50"
                                        // >
                                        //     <td className="p-4">
                                        //         <div className="font-medium text-gray-900">
                                        //             {form.formName}
                                        //         </div>
                                        //     </td>
                                        //     <td className="p-4">
                                        //         <div className="text-gray-500 max-w-xs truncate">
                                        //             {form.description}
                                        //         </div>
                                        //     </td>
                                        //     <td className="p-4">
                                        //         <div className="font-medium">
                                        //             {/* {form.submissions} */}
                                        //         </div>
                                        //     </td>
                                        //     <td className="p-4">
                                        //         {/* <Badge
                                        //             variant={
                                        //                 form.isPublished
                                        //                     ? "default"
                                        //                     : "secondary"
                                        //             }
                                        //         >
                                        //             {form.isPublished
                                        //                 ? "Published"
                                        //                 : "Draft"}
                                        //         </Badge> */}
                                        //     </td>
                                        //     <td className="p-4">
                                        //         <div className="text-gray-500">
                                        //             {/* {form.updatedAt} */}
                                        //         </div>
                                        //     </td>
                                        //     <td className="p-4">
                                        //         <div className="flex items-center justify-end gap-1">
                                        //             <Link
                                        //                 href={`/forms/details/${form.id}`}
                                        //             >
                                        //                 <Button
                                        //                     variant="ghost"
                                        //                     size="sm"
                                        //                 >
                                        //                     <Eye className="w-4 h-4" />
                                        //                 </Button>
                                        //             </Link>
                                        //             <Link
                                        //                 href={`/forms/edit/${form.id}`}
                                        //             >
                                        //                 <Button
                                        //                     variant="ghost"
                                        //                     size="sm"
                                        //                 >
                                        //                     <Edit className="w-4 h-4" />
                                        //                 </Button>
                                        //             </Link>
                                        //             <Button
                                        //                 variant="ghost"
                                        //                 size="sm"
                                        //                 onClick={() =>
                                        //                     copyShareLink(
                                        //                         form.id
                                        //                     )
                                        //                 }
                                        //             >
                                        //                 <Share className="w-4 h-4" />
                                        //             </Button>
                                        //             <Button
                                        //                 variant="ghost"
                                        //                 size="sm"
                                        //                 onClick={() =>
                                        //                     handleDeleteForm(
                                        //                         form.id,
                                        //                         form.formName
                                        //                     )
                                        //                 }
                                        //                 className="text-red-600 hover:text-red-700"
                                        //             >
                                        //                 <Trash2 className="w-4 h-4" />
                                        //             </Button>
                                        //         </div>
                                        //     </td>
                                        // </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default Forms;
