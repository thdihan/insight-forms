"use client";

import React, { useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import TextInput from "../dashboard/inputs/TextInput";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { TypeFormField } from "@/types/form";

type Props = {
    field: TypeFormField;
    responses: Record<string, any>;
    handleChange: (fieldId: number, value: any) => void;
};

const TableField = ({ field, handleChange, responses }: Props) => {
    const currentRows: Record<string, string>[] = responses[field.id] || [];

    useEffect(() => {
        const newRows = [...currentRows, {}];
        handleChange(field.id, newRows);
    }, []);

    const updateCell = (rowIndex: number, key: string, value: string) => {
        const newRows = [...currentRows];
        newRows[rowIndex] = { ...newRows[rowIndex], [key]: value };
        handleChange(field.id, newRows);
    };

    const addRow = () => {
        const newRows = [...currentRows, {}];
        handleChange(field.id, newRows);
    };

    return (
        <div className="py-4 border-y space-y-2">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{field.label}</h3>
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={addRow}
                    className="h-8 w-8"
                >
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        {field.type === "table" &&
                            field.options.map((option, index) => (
                                <TableHead key={index} className="">
                                    <span className="text-wrap">
                                        {option.label}
                                    </span>
                                </TableHead>
                            ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentRows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {field.type === "table" &&
                                field.options.map((option, colIndex) => (
                                    <TableCell key={colIndex}>
                                        <TextInput
                                            placeholder="Enter text"
                                            label=""
                                            labelStyle="hidden"
                                            textValue={row[option.label] || ""}
                                            inputChange={(e) =>
                                                updateCell(
                                                    rowIndex,
                                                    option.label,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </TableCell>
                                ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableField;
