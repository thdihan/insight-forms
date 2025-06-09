import AppSidebar from "@/components/dashboard/AppSidebar";
import { CustomTrigger } from "@/components/dashboard/CustomSidebarTrigger";
import Logout from "@/components/dashboard/Logout";
import SidebarUi from "@/components/dashboard/Sidebar";
import Session from "@/components/providers/Session";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { signOut } from "next-auth/react";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

function Layout({ children }: Props) {
    return (
        <Session>
            <SidebarProvider>
                <div className="min-h-screen flex w-full bg-gray-50">
                    <AppSidebar />
                    <main className="flex-1 p-6">{children}</main>
                </div>
            </SidebarProvider>
        </Session>
    );
}

export default Layout;
