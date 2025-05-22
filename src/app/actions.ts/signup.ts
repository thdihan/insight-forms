"use server";

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export const signup = async (userInfo: { email: string; password: string }) => {
    const result = prisma.user.create({
        data: {
            email: userInfo.email,
            password: userInfo.password,
        },
    });

    return result;
};
