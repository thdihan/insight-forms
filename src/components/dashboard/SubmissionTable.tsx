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
import { Button } from "../ui/button";
import jsPDF from "jspdf";

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

    const generatePdf = (submission: Submission) => {
        const doc = new jsPDF();
        let y = 10;

        doc.setFontSize(16);
        doc.text(`Submission ID: ${submission.id}`, 10, y);
        y += 10;
        doc.text(
            `Submitted At: ${new Date(submission.createdAt).toLocaleString()}`,
            10,
            y
        );
        y += 10;

        submission.responses.forEach((resp) => {
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(`${resp.field.label}:`, 10, y);
            doc.setFont("helvetica", "normal");

            if (resp.textValue) {
                console.log("TEXTVALUE");
                doc.text(`${resp.textValue}`, 60, y);
                y += 10;
            } else if (resp.selectedOption) {
                console.log("SELECTEDOPTIONS * ", resp.selectedOption);
                doc.text(`${resp.selectedOption}`, 60, y);
                y += 10;
            } else if (
                Array.isArray(resp.selectedOptions) &&
                resp.selectedOptions.length > 0
            ) {
                console.log("SELECTEDOPTIONS * * *", resp.selectedOptions);
                doc.text(resp.selectedOptions.join(", "), 60, y);
                y += 10;
            } else if (
                Array.isArray(resp.tableValue) &&
                resp.tableValue.length > 0
            ) {
                console.log("TABLE * ", resp.tableValue);
                resp.tableValue.forEach((rowObj, rowIndex) => {
                    y += 5;
                    doc.setFont("helvetica", "bold");
                    doc.text(`--------- ${rowIndex + 1} ---------`, 15, y);
                    y += 5;
                    doc.setFont("helvetica", "normal");
                    for (const [key, val] of Object.entries(rowObj)) {
                        doc.text(`${key}: ${String(val)}`, 20, y);
                        y += 6;
                    }
                });
                y += 4;
            } else if (
                typeof resp.tableValue === "object" &&
                resp.tableValue !== null
            ) {
                console.log("TABLE * * ");
                for (const [key, val] of Object.entries(resp.tableValue)) {
                    doc.text(`${key}: ${String(val)}`, 60, y);
                    y += 6;
                }
            } else {
                doc.text("-", 60, y);
                y += 10;
            }

            // Prevent overlapping bottom
            if (y > 270) {
                doc.addPage();
                y = 10;
            }
        });

        doc.save(`submission_${submission.id}.pdf`);
    };

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
                            fieldLabels.map((label, idx) => (
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
                    {submissions?.map((submission) => {
                        const maxSubRows = Math.max(
                            ...submission.responses.map((resp) => {
                                if (
                                    Array.isArray(resp.tableValue) &&
                                    resp.tableValue.length > 0
                                ) {
                                    return resp.tableValue.length;
                                }
                                return 1;
                            })
                        );

                        return Array.from({ length: maxSubRows }).map(
                            (_, rowIndex) => (
                                <TableRow
                                    key={`${submission.id}-row-${rowIndex}`}
                                >
                                    {rowIndex === 0 && (
                                        <>
                                            <TableCell rowSpan={maxSubRows}>
                                                {submission.id}
                                            </TableCell>
                                            <TableCell rowSpan={maxSubRows}>
                                                {new Date(
                                                    submission.createdAt
                                                ).toLocaleString()}
                                            </TableCell>
                                        </>
                                    )}

                                    {submission.responses.map((resp, idx) => {
                                        const isTableArray =
                                            Array.isArray(resp.tableValue) &&
                                            resp.tableValue.length > 0;

                                        if (isTableArray) {
                                            const currentRow =
                                                resp.tableValue != null &&
                                                resp?.tableValue[rowIndex];
                                            return (
                                                <TableCell key={idx}>
                                                    {currentRow ? (
                                                        <div className="text-sm text-muted-foreground space-y-1">
                                                            {Object.entries(
                                                                currentRow
                                                            ).map(
                                                                ([
                                                                    key,
                                                                    val,
                                                                ]) => (
                                                                    <div
                                                                        key={
                                                                            key
                                                                        }
                                                                        className="flex gap-2"
                                                                    >
                                                                        <span className="font-medium text-gray-700">
                                                                            {
                                                                                key
                                                                            }
                                                                            :
                                                                        </span>
                                                                        <span className="text-gray-600">
                                                                            {String(
                                                                                val
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <span className="text-gray-400 italic">
                                                            -
                                                        </span>
                                                    )}
                                                </TableCell>
                                            );
                                        } else {
                                            // Only render static (non-array) responses on the first row
                                            return rowIndex === 0 ? (
                                                <TableCell
                                                    key={idx}
                                                    rowSpan={maxSubRows}
                                                >
                                                    {resp.textValue ||
                                                        resp.selectedOption ||
                                                        (Array.isArray(
                                                            resp.selectedOptions
                                                        )
                                                            ? resp.selectedOptions.join(
                                                                  ", "
                                                              )
                                                            : "")}
                                                    {resp.tableValue &&
                                                        typeof resp.tableValue ===
                                                            "object" && (
                                                            <div className="text-sm text-muted-foreground mt-1 space-y-1">
                                                                {Object.entries(
                                                                    resp.tableValue
                                                                ).map(
                                                                    ([
                                                                        key,
                                                                        val,
                                                                    ]) => (
                                                                        <div
                                                                            key={
                                                                                key
                                                                            }
                                                                            className="flex gap-2"
                                                                        >
                                                                            <span className="font-medium text-gray-700">
                                                                                {
                                                                                    key
                                                                                }

                                                                                :
                                                                            </span>
                                                                            <span className="text-gray-600">
                                                                                {String(
                                                                                    val
                                                                                )}
                                                                            </span>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        )}
                                                </TableCell>
                                            ) : null;
                                        }
                                    })}
                                    {rowIndex === 0 && (
                                        <TableCell rowSpan={maxSubRows}>
                                            <Button
                                                variant="secondary"
                                                onClick={() =>
                                                    generatePdf(submission)
                                                }
                                            >
                                                Download PDF
                                            </Button>
                                        </TableCell>
                                    )}
                                </TableRow>
                            )
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
