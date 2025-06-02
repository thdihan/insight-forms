"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { FieldType } from "@/generated/prisma";

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

type Props = {
    submissions: Submission[];
};

export default function SubmissionsTable({ submissions }: Props) {
    if (submissions?.length === 0) return <p>No submissions found.</p>;

    // Get all unique fields from the first submission (assuming structure is consistent)
    const fieldLabels =
        submissions?.length > 0 &&
        submissions[0].responses.map((r) => r.field.label);

    return (
        <div className="overflow-auto rounded-md border mt-6">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="whitespace-nowrap">
                            Submission ID
                        </TableHead>
                        <TableHead className="whitespace-nowrap">
                            Submitted At
                        </TableHead>
                        {Array.isArray(fieldLabels) &&
                            fieldLabels.length > 0 &&
                            fieldLabels?.map((label, idx) => (
                                <TableHead
                                    key={idx}
                                    className="whitespace-nowrap"
                                >
                                    {label}
                                </TableHead>
                            ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {submissions?.map((submission) => (
                        <TableRow key={submission.id}>
                            <TableCell>{submission.id}</TableCell>
                            <TableCell>
                                {new Date(
                                    submission.createdAt
                                ).toLocaleString()}
                            </TableCell>
                            {submission.responses.map((resp, idx) => (
                                <TableCell key={idx}>
                                    {resp.textValue ||
                                        resp.selectedOption ||
                                        (Array.isArray(resp.selectedOptions)
                                            ? resp.selectedOptions.join(", ")
                                            : "") ||
                                        (resp.tableValue
                                            ? JSON.stringify(resp.tableValue)
                                            : "")}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
