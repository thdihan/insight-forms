"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import {
    Form,
    FormControl,
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
import { useRouter } from "next/navigation";
import { signup } from "../actions.ts/signup";

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

    async function handleRegistration(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const response = await signup(values);
            console.log(response);
            setIsLoading(false);
            router.push("/login");
        } catch (error) {
            console.log(error);
            setFormError(String(error).split("Error:")[1].trim());
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleRegistration)}
                    className="flex flex-col gap-y-4 w-full md:max-w-[400px] border p-8 rounded-md shadow-md mx-1 md:mx-0 bg-white"
                >
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold">Registration</h2>
                        <p className="text-sm text-muted-foreground">
                            Register with your email & password please.
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
                </form>
            </Form>
        </div>
    );
}

export default page;
