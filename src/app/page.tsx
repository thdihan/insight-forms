"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    console.log("SESSION: ", session);

    // useEffect(() => {
    //     if (session === null) {
    //         router.push("/login");
    //     }
    // }, [session, router]);

    return (
        <div>
            Hello: {session?.user?.email}
            <button
                onClick={() => {
                    signOut({
                        redirect: false,
                    });
                    router.push("/login");
                }}
            >
                Logout
            </button>
        </div>
    );
}
