"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import TextInput from "@/components/input/TextInput";
import { toast } from "sonner";
import { signup } from "@/actions/signup";
import { useRouter } from "next/navigation";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const regData = {
            name: fullName,
            email,
            password,
        };
        console.log("[Login Form]", regData);

        if (password !== confirmPassword) {
            toast("Error : Passwords do not match.", {
                description: "Passwords do not match.",
                action: {
                    label: "Close",
                    onClick: () => console.log("Closing..."),
                },
            });
            // toast({
            //     title: "Error",
            //     description: "Passwords do not match.",
            //     variant: "destructive",
            // });
            return;
        }

        setIsLoading(true);

        try {
            await signup(regData);

            toast("Account created!", {
                description: "Welcome to InsightForm. Let's get started!",
                action: {
                    label: "Close",
                    onClick: () => console.log("Closing..."),
                },
            });
            router.push("/login");
        } catch (error) {
            toast("Error: Failed to create account. Please try again.", {
                description: "Failed to create account. Please try again.",
                action: {
                    label: "Close",
                    onClick: () => console.log("Closing..."),
                },
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl text-gray-900">
                        InsightForm
                    </span>
                </div>

                <Card className="border-0 shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">
                            Create your account
                        </CardTitle>
                        <CardDescription>
                            Start building amazing forms today
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <TextInput
                                label="Full Name"
                                name="fullName"
                                className="space-y-2"
                                placeholder="Enter Full Name"
                                Icon={
                                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                }
                                inputClass="pl-10"
                                value={fullName}
                                setValue={(val) => setFullName(val)}
                                required
                            />

                            <TextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                className="space-y-2"
                                Icon={
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                }
                                inputClass="pl-10"
                                value={email}
                                setValue={(val) => setEmail(val)}
                                required
                            />
                            <TextInput
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Enter password..."
                                className="space-y-2"
                                Icon={
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                }
                                inputClass="pl-10"
                                value={password}
                                setValue={(val) => setPassword(val)}
                                required
                            />
                            <TextInput
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm password..."
                                className="space-y-2"
                                Icon={
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                }
                                inputClass="pl-10"
                                value={confirmPassword}
                                setValue={(val) => setConfirmPassword(val)}
                                required
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading
                                    ? "Creating account..."
                                    : "Create Account"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="font-medium text-blue-600 hover:text-blue-500"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>

                        <div className="mt-4 text-center">
                            <Link
                                href="/"
                                className="text-sm text-gray-600 hover:text-gray-900"
                            >
                                ← Back to home
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Register;
