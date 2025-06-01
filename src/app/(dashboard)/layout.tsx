import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { CustomTrigger } from "@/components/dashboard/CustomSidebarTrigger";
import SidebarUi from "@/components/dashboard/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

function layout({ children }: Props) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                <div className="flex  items-center p-2 gap-x-2 bg-white border-b">
                    <CustomTrigger />
                    <h3 className="text-2xl font-bold">InsightForm</h3>
                </div>

                {children}
            </main>
        </SidebarProvider>
    );
}

export default layout;
