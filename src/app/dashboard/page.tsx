import React from "react";
// import { useForm } from "../contexts/FormContext";
// import { useAuth } from "../contexts/AuthContext";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Users,
    BarChart3,
    TrendingUp,
    Plus,
    Eye,
} from "lucide-react";
import Link from "next/link";
// import { Link } from "react-router-dom";

const Dashboard = () => {
    // const { forms, submissions } = useForm();
    // const { user } = useAuth();

    // const totalForms = forms.length;
    const totalForms = 10;
    // const totalSubmissions = forms.reduce(
    //     (sum, form) => sum + form.submissions,
    //     0
    // );

    const totalSubmissions = 10;
    // const publishedForms = forms.filter((form) => form.isPublished).length;
    const publishedForms = 11;

    // const recentForms = forms.slice(0, 3);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                    <p className="text-gray-600 mt-1">
                        {/* Welcome back, {user?.name || "User Name Here"}! Here's what's happening with
                        your forms. */}
                    </p>
                </div>
                <Link href="/forms/create">
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        Create Form
                    </Button>
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Forms
                        </CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalForms}</div>
                        <p className="text-xs text-muted-foreground">
                            {publishedForms} published
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Submissions
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {totalSubmissions}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            +12% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Response Rate
                        </CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">68%</div>
                        <p className="text-xs text-muted-foreground">
                            +5% from last week
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Avg. Completion
                        </CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4.2 min</div>
                        <p className="text-xs text-muted-foreground">
                            -0.3 min from last week
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Forms */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Forms</CardTitle>
                    <CardDescription>Your latest form activity</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* <div className="space-y-4">
                        {recentForms.length > 0 ? (
                            recentForms.map((form) => (
                                <div
                                    key={form.id}
                                    className="flex items-center justify-between p-4 border rounded-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <FileText className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">
                                                {form.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {form.description}
                                            </p>
                                            <div className="flex items-center gap-4 mt-1">
                                                <span className="text-xs text-gray-400">
                                                    {form.submissions}{" "}
                                                    submissions
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Updated {form.updatedAt}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link to={`/forms/details/${form.id}`}>
                                            <Button variant="outline" size="sm">
                                                <Eye className="w-4 h-4" />
                                            </Button>
                                        </Link>
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${
                                                form.isPublished
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-gray-100 text-gray-800"
                                            }`}
                                        >
                                            {form.isPublished
                                                ? "Published"
                                                : "Draft"}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                                <h3 className="mt-2 text-sm font-medium text-gray-900">
                                    No forms yet
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Get started by creating your first form.
                                </p>
                                <div className="mt-6">
                                    <Link href="/forms/create">
                                        <Button>
                                            <Plus className="w-4 h-4 mr-2" />
                                            Create Form
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    {recentForms.length > 0 && (
                        <div className="mt-6 text-center">
                            <Link to="/forms">
                                <Button variant="outline">
                                    View All Forms
                                </Button>
                            </Link>
                        </div>
                    )} */}
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
