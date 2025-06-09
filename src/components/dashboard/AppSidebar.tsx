"use client";
import {
    Home,
    FileText,
    Plus,
    Layout,
    Settings,
    LogOut,
    Users,
    BarChart3,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Logout from "./Logout";
import { usePathname } from "next/navigation";

const AppSidebar = () => {
    const location = usePathname();
    const menuItems = [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: Home,
        },
        {
            title: "Forms",
            url: "/forms",
            icon: FileText,
        },
        {
            title: "Create Form",
            url: "/forms/create",
            icon: Plus,
        },
        {
            title: "Templates",
            url: "/templates",
            icon: Layout,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: Settings,
        },
    ];

    const adminItems = [
        {
            title: "Analytics",
            url: "/analytics",
            icon: BarChart3,
        },
        {
            title: "Users",
            url: "/users",
            icon: Users,
        },
    ];

    return (
        <Sidebar className="border-r border-gray-200">
            <SidebarHeader className="p-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl text-gray-900">
                        InsightForm
                    </span>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={location === item.url}
                                        className="data-[active=true]:bg-blue-100 data-[active=true]:text-blue-700"
                                    >
                                        <Link href={item.url}>
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4">
                <div className="border-t pt-4">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">
                                {/* {user?.name?.charAt(0).toUpperCase()} */}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {/* {user?.name} */}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                                {/* {user?.email} */}
                            </p>
                        </div>
                    </div>
                    <Logout />
                </div>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
