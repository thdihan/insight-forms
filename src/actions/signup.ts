"use server";

import { PrismaClient } from "@/generated/prisma";
import { TUser } from "@/types/user.types";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const signup = async (userInfo: TUser) => {
    const hashedPassword = await bcrypt.hash(userInfo.password, 12);
    const result = prisma.user.create({
        data: {
            name: userInfo.name,
            email: userInfo.email,
            password: hashedPassword,
        },
    });

    return result;
};
