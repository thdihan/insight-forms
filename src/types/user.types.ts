import { UserType } from "@/generated/prisma";

export type TUserType = keyof typeof UserType;

export type TUser = {
    name: string;
    email: string;
    password: string;
    role?: TUserType;
};
