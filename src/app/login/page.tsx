"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { error } from "console";
import { useRouter } from "next/navigation";

type Props = {};
const formSchema = z.object({
    email: z
        .string({
            message: "Email mustn't be empty.",
        })
        .email({
            message: "Please provide a valid email.",
        }),
    password: z.string(),
});

function page({}: Props) {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [formError, setFormError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleLogin(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        signIn("credentials", {
            ...values,
            redirect: false,
        })
            .then((data) => {
                console.log("this function invoked", data?.error);

                setIsLoading(false);

                if (data?.ok == false) throw new Error(data?.error as string);

                router.push("/");
            })
            .catch((error: any) => {
                console.log("Form error set", error);
                // console.log(error);
                setFormError(String(error).split("Error:")[1].trim());
            });
        // console.log(response);
        //             {
        //     "error": "User not found",
        //     "status": 401,
        //     "ok": false,
        //     "url": null
        // }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleLogin)}
                    className="flex flex-col gap-y-4 w-full md:max-w-[400px] border p-8 rounded-md shadow-md mx-1 md:mx-0 bg-white"
                >
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold">Login</h2>
                        <p className="text-sm text-muted-foreground">
                            Login with your email & password please.
                        </p>
                    </div>

                    {/* Email Input  */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Email address..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Password Input  */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Password..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {formError != "" && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{formError}</AlertDescription>
                        </Alert>
                    )}
                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                    >
                        {isLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            "Login"
                        )}
                    </Button>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with email
                            </span>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default page;
