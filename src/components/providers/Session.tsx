"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const Session = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default Session;
