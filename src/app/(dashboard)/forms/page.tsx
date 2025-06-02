"use client";
import { deleteForm, getForms } from "@/app/actions.ts/forms";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { IForms } from "@/types/form";
import { Edit2, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
    const router = useRouter();
    const [data, setData] = useState<any>();

    useEffect(() => {
        function loadData() {
            getForms().then((data) => {
                console.log(data);
                if (data) setData(data);
            });
        }

        loadData();
    }, []);

    async function loadData() {
        getForms().then((data) => {
            console.log(data);
            if (data) setData(data);
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
    return (
        <div className="p-2 flex justify-center w-full">
            <div className="w-full md:max-w-[95%] py-8 px-8 my-8 border-2 rounded-md shadow-xl bg-white">
                <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-bold">Forms</h3>
                    <Button>
                        <Link href={"/create-form"}>Create New Form</Link>
                    </Button>
                </div>
                <Table>
                    <TableCaption>All forms</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[25%]">Form Name</TableHead>
                            <TableHead className="w-[50%]">
                                Form Description
                            </TableHead>
                            <TableHead className="w-[10%]">
                                Total Submission
                            </TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((data: IForms) => (
                            <TableRow key={data.formName}>
                                <TableCell className="font-medium">
                                    {data.formName}
                                </TableCell>
                                <TableCell>{data.description}</TableCell>
                                <TableCell>{10}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex gap-x-2 justify-end-safe">
                                        <Button
                                            variant="outline"
                                            className="cursor-pointer"
                                            onClick={() =>
                                                window.open(
                                                    `/preview/${data.id}`,
                                                    "_blank"
                                                )
                                            }
                                        >
                                            <Eye className="w-6 h-6 text-black" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="cursor-pointer"
                                            onClick={() =>
                                                router.push(
                                                    `/edit-form/${data.id}`
                                                )
                                            }
                                        >
                                            <Edit2 className="w-6 h-6 text-black" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="cursor-pointer"
                                            onClick={(e) =>
                                                handleDeleteForm(e, data.id)
                                            }
                                        >
                                            <Trash2 className="w-6 h-6 text-red-500" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default page;
