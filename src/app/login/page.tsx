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
import { CheckCircle, Mail, Lock } from "lucide-react";
import Link from "next/link";
import TextInput from "@/components/input/TextInput";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import { toast } from "@/hooks/use-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            toast("Welcome back! You have successfully signed in.", {
                description: "You have successfully signed in.",
                action: {
                    label: "Close",
                    onClick: () => console.log("Closing..."),
                },
            });

            // router.push("/dashboard");
        } catch (error) {
            toast("Error: Invalid credentials. Please try again.", {
                description: "Invalid credentials. Please try again.",
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
                            Welcome back
                        </CardTitle>
                        <CardDescription>
                            Sign in to your account to continue
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
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

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? "Signing in..." : "Sign In"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <Link
                                    href="/register"
                                    className="font-medium text-blue-600 hover:text-blue-500"
                                >
                                    Sign up
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

                {/* Demo credentials */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800 font-medium mb-2">
                        Demo Credentials:
                    </p>
                    <p className="text-xs text-blue-600">
                        Admin: admin@demo.com / password
                    </p>
                    <p className="text-xs text-blue-600">
                        User: user@demo.com / password
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
