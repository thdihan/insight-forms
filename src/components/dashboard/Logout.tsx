"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

type Props = {};

const Logout = (props: Props) => {
    return (
        <div>
            <Button
                onClick={() => signOut()}
                variant="outline"
                className="cursor-pointer"
            >
                Logout
            </Button>
        </div>
    );
};

export default Logout;
