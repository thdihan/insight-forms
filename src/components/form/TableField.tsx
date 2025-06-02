import { TypeFormField } from "@/types/form";
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import TextInput from "../dashboard/inputs/TextInput";

type Props = {
    field: TypeFormField;
    responses: Record<string, any>;
    handleChange: (fieldId: number, value: any) => void;
};

const TableField = ({ field, handleChange, responses }: Props) => {
    return (
        <div className="py-2 border-y">
            <h3 className="text-lg">{field.label}</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        {field.type === "table" &&
                            field.options.map((option, index) => (
                                <TableHead key={index}>
                                    {option.label}
                                </TableHead>
                            ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        {field.type === "table" &&
                            field.options.map((option, index) => (
                                <TableCell key={index}>
                                    <TextInput
                                        placeholder={"Enter text"}
                                        label=""
                                        labelStyle="hidden"
                                        textValue={
                                            responses[field.id]?.[option.id] ||
                                            ""
                                        }
                                        inputChange={(e) => {
                                            const currentRow =
                                                responses[field.id] || {};
                                            handleChange(field.id, {
                                                ...currentRow,
                                                [option.id]: e.target.value,
                                            });
                                        }}
                                    />
                                </TableCell>
                            ))}
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default TableField;
