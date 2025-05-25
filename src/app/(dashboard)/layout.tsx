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
            <main className="flex">
                {/* <CustomTrigger /> */}
                {children}
            </main>
        </SidebarProvider>
    );
}

export default layout;
