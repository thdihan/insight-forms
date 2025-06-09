"use client";
import { deleteForm, getForms } from "@/app/actions.ts/forms";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IForms } from "@/types/form";
import { Edit, Eye, Plus, Search, Share, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
    const [data, setData] = useState<IForms[]>();

    const [searchTerm, setSearchTerm] = useState("");

    const filteredForms =
        data &&
        data.filter(
            (form) =>
                form.formName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                form.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
        );

    useEffect(() => {
        function loadData() {
            getForms().then((data) => {
                console.log(data);
                if (data) {
                    const transformedData = data.map((item) => ({
                        id: item.id,
                        formName: item.formName,
                        description: item.description,
                        formSections: item.sections.map((section) => ({
                            id: section.id,
                            fields: section.fields.map((field) => ({
                                ...field,
                                options: field.options,
                            })),
                        })),
                        createdAt: item.createdAt,
                        updatedAt: item.updatedAt,
                    }));
                    setData(transformedData as IForms[]);
                }
            });
        }

        loadData();
    }, []);

    async function loadData() {
        await getForms().then((data) => {
            console.log(data);
            if (data) {
                const transformedData = data.map((item) => ({
                    id: item.id,
                    formName: item.formName,
                    description: item.description,
                    formSections: item.sections.map((section) => ({
                        id: section.id,
                        fields: section.fields.map((field) => ({
                            ...field,
                            options: field.options,
                        })),
                    })),
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt,
                }));
                setData(transformedData as IForms[]);
            }
        });
    }

    const handleDeleteForm = async (e: any, id: number) => {
        e.preventDefault();
        try {
            await deleteForm(id);
            await loadData();
        } catch (error) {
            console.log("Error", error);
        }
    };
    const copyShareLink = (formId: number) => {
        const shareLink = `${window.location.origin}/form/${formId}`;
        navigator.clipboard.writeText(shareLink);
        // toast({
        //     title: "Link copied!",
        //     description: "Share link has been copied to clipboard.",
        // });
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
                        className="pl-10 bg-white"
                    />
                </div>

                {/* View Mode Control  */}
                {/* <div className="flex items-center gap-2">
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
                </div> */}
            </div>

            {/* forms  */}

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
                                {filteredForms &&
                                    filteredForms.map((form) => (
                                        <tr
                                            key={form.id}
                                            className="border-b hover:bg-gray-50"
                                        >
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
                                                    {/* {form?.updatedAt} */}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center justify-end gap-1">
                                                    <Link
                                                        href={`/forms/${form.id}`}
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                    <Link
                                                        href={`/forms/edit/${form.id}`}
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="cursor-pointer"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() =>
                                                            copyShareLink(
                                                                form.id
                                                            )
                                                        }
                                                    >
                                                        <Share className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={(e) =>
                                                            handleDeleteForm(
                                                                e,
                                                                form.id
                                                            )
                                                        }
                                                        className="text-red-600 hover:text-red-700"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
        // <div className="p-2 flex justify-center w-full">
        //     <div className="w-full md:max-w-[95%] py-8 px-8 my-8 border-2 rounded-md shadow-xl bg-white">
        //         <div className="flex justify-between mb-4">
        //             <h3 className="text-xl font-bold">Forms</h3>
        //             <Button>
        //                 <Link href={"/create-form"}>Create New Form</Link>
        //             </Button>
        //         </div>
        //         <Table>
        //             <TableCaption>All forms</TableCaption>
        //             <TableHeader>
        //                 <TableRow>
        //                     <TableHead className="w-[25%]">Form Name</TableHead>
        //                     <TableHead className="w-[50%]">
        //                         Form Description
        //                     </TableHead>
        //                     <TableHead className="w-[10%]">
        //                         Total Submission
        //                     </TableHead>
        //                     <TableHead className="text-right">Action</TableHead>
        //                 </TableRow>
        //             </TableHeader>
        //             <TableBody>
        //                 {data?.map((data: IForms) => (
        //                     <TableRow key={data.formName}>
        //                         <TableCell className="font-medium">
        //                             {data.formName}
        //                         </TableCell>
        //                         <TableCell>
        //                             {data.description.substring(0, 50)}...
        //                         </TableCell>
        //                         <TableCell>{10}</TableCell>
        //                         <TableCell className="text-right">
        //                             <div className="flex gap-x-2 justify-end-safe">
        //                                 <Button
        //                                     variant="outline"
        //                                     className="cursor-pointer"
        //                                     onClick={() =>
        //                                         router.push(
        //                                             `/form-response/${data.id}`
        //                                         )
        //                                     }
        //                                 >
        //                                     <ListCheck className="w-6 h-6 text-black" />
        //                                 </Button>
        //                                 <Dialog>
        //                                     <DialogTrigger asChild>
        //                                         <Button
        //                                             variant="outline"
        //                                             className="cursor-pointer"
        //                                             onClick={() =>
        //                                                 setCopyStatus(false)
        //                                             }
        //                                         >
        //                                             <Share className="w-6 h-6 text-black" />
        //                                         </Button>
        //                                     </DialogTrigger>
        //                                     <DialogContent className="sm:max-w-[425px]">
        //                                         <DialogHeader>
        //                                             <DialogTitle>
        //                                                 Share
        //                                             </DialogTitle>
        //                                         </DialogHeader>
        //                                         <div className="flex items-center space-x-2">
        //                                             <Input
        //                                                 readOnly
        //                                                 value={`http://localhost:3000/form/${data.id}`}
        //                                                 className="flex-1"
        //                                             />
        //                                             <Button
        //                                                 variant="secondary"
        //                                                 onClick={() =>
        //                                                     handleCopy(
        //                                                         `http://localhost:3000/form/${data.id}`
        //                                                     )
        //                                                 }
        //                                             >
        //                                                 {!copyStatus ? (
        //                                                     <>
        //                                                         <Copy className="w-4 h-4 mr-1" />
        //                                                         Copy
        //                                                     </>
        //                                                 ) : (
        //                                                     <>
        //                                                         <CopyCheck className="w-4 h-4 mr-1" />
        //                                                         Done!
        //                                                     </>
        //                                                 )}
        //                                             </Button>
        //                                         </div>
        //                                     </DialogContent>
        //                                 </Dialog>

        //                                 <Button
        //                                     variant="outline"
        //                                     className="cursor-pointer"
        //                                     onClick={() =>
        //                                         window.open(
        //                                             `/preview/${data.id}`,
        //                                             "_blank"
        //                                         )
        //                                     }
        //                                 >
        //                                     <Eye className="w-6 h-6 text-black" />
        //                                 </Button>
        //                                 <Button
        //                                     variant="outline"
        //                                     className="cursor-pointer"
        //                                     onClick={() =>
        //                                         router.push(
        //                                             `/edit-form/${data.id}`
        //                                         )
        //                                     }
        //                                 >
        //                                     <Edit2 className="w-6 h-6 text-black" />
        //                                 </Button>
        //                                 <Button
        //                                     variant="outline"
        //                                     className="cursor-pointer"
        //                                     onClick={(e) =>
        //                                         handleDeleteForm(e, data.id)
        //                                     }
        //                                 >
        //                                     <Trash2 className="w-6 h-6 text-red-500" />
        //                                 </Button>
        //                             </div>
        //                         </TableCell>
        //                     </TableRow>
        //                 ))}
        //             </TableBody>
        //         </Table>
        //     </div>
        // </div>
    );
};

export default page;
