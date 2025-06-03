"use client";
import { getFormById } from "@/app/actions.ts/forms";
import TextInput from "@/components/dashboard/inputs/TextInput";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectItem, SelectTrigger } from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { IForms, TypeFormField } from "@/types/form";
import { SelectContent, SelectValue } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
import React, { Context, use, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import parse from "html-react-parser";

type Props = { params: any };

const page = ({ params }: Props) => {
    const { formId } = params;

    const router = useRouter();
    const [formValues, setFormValues] = useState<IForms>({
        id: 1,
        formName: "",
        description: "",
        fields: [],
    });

    useEffect(() => {
        console.log(formId);
        const loadData = () => {
            getFormById(formId).then((data) => {
                console.log(data);
                if (data) {
                    const transformedData: IForms = {
                        id: data.id,
                        formName: data.formName,
                        description: data.description,
                        fields: data.fields.map((field) => {
                            const transformedField: TypeFormField = {
                                ...field,
                                type: field.type, // Ensure type matches the expected TypeFormField type
                                options: field.options || [],
                            } as TypeFormField;
                            return transformedField;
                        }),
                    };
                    setFormValues(transformedData);
                } else {
                    console.error("No data found for the given ID");
                }
            });
        };

        loadData();
    }, []);
    return (
        <div className="flex flex-col items-center w-full h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="w-full flex items-center p-2 gap-x-2 bg-white border-b">
                <h3 className="text-2xl font-bold">InsightForm</h3>
            </div>

            <div className="w-full max-w-[1000px] my-4 bg-white shadow-lg border p-4 rounded-md">
                <h1 className="text-center text-2xl font-semibold py-4">
                    {formValues.formName}
                </h1>
                <div>{parse(formValues.description)}</div>

                <div className="border-b-2 py-2"></div>

                <div className="pt-8 py-4 space-y-4">
                    {formValues.fields.length > 0 &&
                        formValues.fields.map((field, index) => {
                            return (
                                <div key={index}>
                                    {field.type === "text" && (
                                        <TextInput
                                            placeholder={field.placeholder}
                                            label={field.label}
                                            textValue={""}
                                            inputChange={(e) => {}}
                                            multiline={field.multiline}
                                        />
                                    )}

                                    {field.type === "checkbox" && (
                                        <div>
                                            <h3 className="text-lg py-2">
                                                {field.label}
                                            </h3>

                                            <div className="flex flex-wrap gap-x-8">
                                                {field.options.map(
                                                    (option, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-x-2"
                                                        >
                                                            <Checkbox
                                                                checked={true}
                                                            />
                                                            <Label>
                                                                {option.label}
                                                            </Label>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {field.type === "radio" && (
                                        <div>
                                            <h3 className="text-lg py-2">
                                                {field.label}
                                            </h3>

                                            <div className="flex flex-wrap gap-x-8">
                                                <RadioGroup
                                                    defaultValue="comfortable"
                                                    className="flex flex-wrap gap-x-8"
                                                >
                                                    {field.options.map(
                                                        (option, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-x-2"
                                                            >
                                                                <RadioGroupItem
                                                                    value={
                                                                        option.label
                                                                    }
                                                                    id={option.id.toString()}
                                                                />
                                                                <Label
                                                                    htmlFor={option.id.toString()}
                                                                >
                                                                    {
                                                                        option.label
                                                                    }
                                                                </Label>
                                                            </div>
                                                        )
                                                    )}
                                                </RadioGroup>
                                            </div>
                                        </div>
                                    )}

                                    {field.type === "table" && (
                                        <div
                                            key={index}
                                            className="py-2 border-y"
                                        >
                                            <h3 className="text-lg">
                                                {field.label}
                                            </h3>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        {field.options.map(
                                                            (option, index) => (
                                                                <TableHead
                                                                    key={index}
                                                                >
                                                                    {
                                                                        option.label
                                                                    }
                                                                </TableHead>
                                                            )
                                                        )}
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        {field.options.map(
                                                            (option, index) => (
                                                                <TableCell
                                                                    key={index}
                                                                >
                                                                    <TextInput
                                                                        placeholder={
                                                                            "Enter text"
                                                                        }
                                                                        label=""
                                                                        labelStyle="hidden"
                                                                        textValue={
                                                                            ""
                                                                        }
                                                                        inputChange={(
                                                                            e
                                                                        ) => {}}
                                                                    />
                                                                </TableCell>
                                                            )
                                                        )}
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    )}

                                    {field.type === "select" && (
                                        <div key={index}>
                                            <h3 className="text-lg py-2">
                                                {field.label}
                                            </h3>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue
                                                        placeholder={
                                                            field.label
                                                        }
                                                    />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white w-full">
                                                    {field.options.map(
                                                        (option, index) => (
                                                            <SelectItem
                                                                key={index}
                                                                value={
                                                                    option.label
                                                                }
                                                                className="w-[800px]"
                                                            >
                                                                {option.label}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default page;
