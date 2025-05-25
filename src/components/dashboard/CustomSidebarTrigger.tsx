"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { Sidebar } from "lucide-react";

export function CustomTrigger() {
    const { toggleSidebar } = useSidebar();

    return (
        <button onClick={toggleSidebar} className="p-2">
            <Sidebar />
        </button>
    );
}
