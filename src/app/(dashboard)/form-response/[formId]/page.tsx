"use client";
import { getSubmissions } from "@/app/actions.ts/submission";
import SubmissionsTable from "@/components/dashboard/SubmissionTable";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FieldType } from "@/generated/prisma";
import React, { Context, use, useEffect, useState } from "react";

type Props = { params: any };
type FieldResponse = {
    id: string;
    textValue: string | null;
    selectedOption: string | null;
    selectedOptions: string[] | null;
    tableValue: Record<string, any> | null;
    field: {
        id: number;
        label: string;
        type: FieldType;
    };
};
type Submission = {
    id: number;
    createdAt: string;
    responses: FieldResponse[];
};
const page = ({ params }: Props) => {
    // const { formId } = use<{ formId: string }>(params);
    const { formId } = params;

    const [submission, setSubmission] = useState<any>();

    useEffect(() => {
        getSubmissions(formId).then((data) => {
            console.log("formdata: ", data);
            if (data) {
                const transformedData = data.map((submission) => ({
                    ...submission,
                    createdAt: submission.createdAt.toString(),
                }));
                setSubmission(transformedData);
            }
        });
    }, []);

    return (
        <div className="p-2 flex justify-center w-full">
            <div className="w-full md:max-w-[95%] py-8 px-8 my-8 border-2 rounded-md shadow-xl bg-white">
                <SubmissionsTable submissions={submission} />
            </div>
        </div>
    );
};

export default page;
