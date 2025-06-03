import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { CustomTrigger } from "@/components/dashboard/CustomSidebarTrigger";
import Logout from "@/components/dashboard/Logout";
import SidebarUi from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { signOut } from "next-auth/react";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

function layout({ children }: Props) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                <div className="flex  justify-between items-center p-2  bg-white border-b">
                    <div className="flex items-center gap-x-2">
                        <CustomTrigger />
                        <h3 className="text-2xl font-bold">InsightForm</h3>
                    </div>
                    <Logout />
                </div>

                {children}
            </main>
        </SidebarProvider>
    );
}

export default layout;
