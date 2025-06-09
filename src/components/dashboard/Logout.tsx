"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

type Props = {};

const Logout = (props: Props) => {
    return (
        <div>
            <Button
                variant="outline"
                onClick={() => signOut()}
                className="flex items-center gap-2 w-full p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
                <LogOut className="w-4 h-4" />
                Sign out
            </Button>
        </div>
    );
};

export default Logout;
