"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GripVertical } from "lucide-react";
import React, { FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { TypeFormField } from "@/types/form";
import { Label } from "@/components/ui/label";
import TextInput from "@/components/dashboard/inputs/TextInput";
import SwitchInput from "@/components/dashboard/inputs/SwitchInput";
import NewFieldButtons from "@/components/dashboard/forms/NewFieldButtons";
import TextField from "@/components/dashboard/forms/TextField";
import CheckboxField from "@/components/dashboard/forms/CheckboxField";
import RadiobuttonsField from "@/components/dashboard/forms/RadiobuttonsField";
import TableField from "@/components/dashboard/forms/TableField";

type Props = {};

const page = (props: Props) => {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className="p-2 flex justify-center w-full">
            <div className="w-full md:max-w-[95%] py-8 px-8 my-8 border-2 rounded-md shadow-xl bg-white">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <TextInput
                        name="form-name"
                        placeholder="Enter Form name"
                        label="Form Name"
                        labelStyle="text-xl font-semibold"
                        inputStyle=""
                    />

                    <TextField />
                    <CheckboxField name="Checkbox" />
                    <RadiobuttonsField name="radioBUttons" />
                    <TableField placeholder="Table View" />
                    <NewFieldButtons />

                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default page;
