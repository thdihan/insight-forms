"use server";

import { PrismaClient } from "@/generated/prisma";
import { TUser } from "@/types/user.types";

const prisma = new PrismaClient();

export const signup = async (userInfo: TUser) => {
    const result = prisma.user.create({
        data: {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
        },
    });

    return result;
};
