import React from "react";
import {
    ArrowRight,
    CheckCircle,
    Users,
    BarChart3,
    Shield,
    Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Landing = () => {
    const features = [
        {
            icon: Zap,
            title: "Drag & Drop Builder",
            description:
                "Create beautiful forms in minutes with our intuitive drag-and-drop interface",
        },
        {
            icon: BarChart3,
            title: "Real-time Analytics",
            description:
                "Track submissions, analyze data, and gain insights with powerful analytics",
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description:
                "Work together with your team to create and manage forms efficiently",
        },
        {
            icon: Shield,
            title: "Secure & Reliable",
            description:
                "Enterprise-grade security to keep your data safe and protected",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <nav className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl text-gray-900">
                            InsightForm
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login">
                            <Button variant="ghost">Sign In</Button>
                        </Link>
                        <Link href="/register">
                            <Button>Get Started</Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        The form builder for the
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            {" "}
                            modern web
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Create beautiful, responsive forms in minutes. Collect
                        data, analyze insights, and engage your audience with
                        our powerful form builder platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button size="lg" className="px-8 py-3 text-lg">
                                Start Building Free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-8 py-3 text-lg"
                            >
                                View Demo
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Everything you need to create amazing forms
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Powerful features designed to help you build, share, and
                        analyze forms with ease
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of users who trust InsightForm for their
                        form building needs
                    </p>
                    <Link href="/register">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="px-8 py-3 text-lg"
                        >
                            Create Your First Form
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="container mx-auto px-4 py-12 border-t border-gray-200">
                <div className="text-center text-gray-600">
                    <p>
                        &copy; 2024 InsightForm. Built with ❤️ for modern teams.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
