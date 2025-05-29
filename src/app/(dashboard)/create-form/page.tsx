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
import {
    Check,
    CheckCheckIcon,
    CheckSquare,
    CircleDot,
    Dot,
    FormInput,
    Radio,
} from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const page = (props: Props) => {
    const form = useForm();

    function onSubmit() {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log(values);
    }

    return (
        <div className="p-2 flex justify-center w-full">
            <div className="w-full md:max-w-[95%] py-4 px-4 my-8 border-2 rounded-md shadow-xl">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="form-name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xl font-semibold">
                                        Form Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Form Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="px-4 py-4 border-s-4 border-s-black rounded-md border ">
                            <FormField
                                control={form.control}
                                name="form-name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="">
                                            Form Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Form Name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                // size="icon"
                                className="flex flex-col items-center justify-center size-[100px]"
                            >
                                <FormInput
                                    // className="w-40 h-40"
                                    style={{ height: "25px", width: "25px" }}
                                />
                                <span>+ Text Box</span>
                            </Button>
                            <Button
                                variant="outline"
                                // size="icon"
                                className="flex flex-col items-center justify-center size-[100px]"
                            >
                                <CheckSquare
                                    // className="w-40 h-40"
                                    style={{ height: "25px", width: "25px" }}
                                />
                                <span>+ Check Box</span>
                            </Button>
                            <Button
                                variant="outline"
                                // size="icon"
                                className="flex flex-col items-center justify-center size-[100px]"
                            >
                                <CircleDot
                                    // className="w-40 h-40"
                                    style={{ height: "25px", width: "25px" }}
                                />
                                <span className="text-wrap">
                                    + Radio Buttons
                                </span>
                            </Button>
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default page;
