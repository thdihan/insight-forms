"use client";
import { getSubmissions } from "@/app/actions.ts/submission";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { Download, Eye, Trash2 } from "lucide-react";
import SubmissionsTable from "@/components/dashboard/SubmissionTable";

type Props = {
    params: any;
};

const page = ({ params }: Props) => {
    const { id } = params;

    const [allSubmission, setAllSubmission] = useState<any>();

    useEffect(() => {
        getSubmissions(id).then((data) => {
            console.log("formdata: ", data);
            if (data) {
                const transformedData = data.map((submission) => ({
                    ...submission,
                    createdAt: submission.createdAt.toString(),
                }));

                console.log(transformedData);
                setAllSubmission(transformedData);
            }
        });
    }, []);
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {allSubmission?.length > 0 &&
                            allSubmission[0]?.form?.formName}
                    </h1>
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

            <div>
                <SubmissionsTable submissions={allSubmission} />
            </div>
        </div>
    );
};

export default page;
