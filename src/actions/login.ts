"use server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export const login = async (email: string) => {
    const response = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    return response;
};
