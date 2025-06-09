"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

type Props = {};

const Logout = (props: Props) => {
    return (
        <Button
            onClick={() => signOut()}
            variant="outline"
            className="flex justify-start items-center gap-2 w-full p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
        >
            <LogOut className="w-4 h-4" />
            Sign out
        </Button>
        // <div>
        //     <Button
        //         onClick={() => signOut()}
        //         variant="outline"
        //         className="cursor-pointer"
        //     >
        //         Logout
        //     </Button>
        // </div>
    );
};

export default Logout;
