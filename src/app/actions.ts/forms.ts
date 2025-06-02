"use server";

import { FieldType, PrismaClient } from "@/generated/prisma";
import { INewForm, TypeFormField } from "@/types/form";

const prisma = new PrismaClient();

export const getForms = async () => {
    const response = await prisma.form.findMany();

    return response;
};
