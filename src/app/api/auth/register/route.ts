// app>api>auth>register>route.ts

import { signup } from "@/app/actions.ts/signup";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        // YOU MAY WANT TO ADD SOME VALIDATION HERE
        await signup({ email, password });
        console.log("Register function", { email, password });
    } catch (e) {
        console.log({ e });
    }

    return NextResponse.json({ message: "success" });
}
