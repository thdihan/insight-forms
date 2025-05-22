// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    console.log(token, "TOKENN");

    const isAuth = !!token;
    const isLoginPage = req.nextUrl.pathname === "/login";

    if (!isAuth && !isLoginPage) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Optional: prevent logged-in users from visiting login page again
    if (isAuth && isLoginPage) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

// Match protected routes
export const config = {
    matcher: [
        "/", // home
    ],
};
