"use client";
import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger, useSidebar } from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { CustomTrigger } from "./CustomSidebarTrigger";

type Props = { children?: ReactNode };

function SidebarUi({ children }: Props) {
    // const { toggleSidebar } = useSidebar();
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <CustomTrigger />
                {/* {children} */}
            </main>
        </SidebarProvider>
    );
}

export default SidebarUi;
