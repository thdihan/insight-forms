"use client";
import { getForms } from "@/app/actions.ts/forms";
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
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];

const page = (props: Props) => {
    const [data, setData] = useState<IForms[]>();

    useEffect(() => {
        function loadData() {
            getForms().then((data) => {
                console.log(data);
                if (data) setData(data);
            });
        }

        loadData();
    }, []);
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
                    <TableCaption>A list of your recent invoices.</TableCaption>
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
                                    <Button>Delete</Button>
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
