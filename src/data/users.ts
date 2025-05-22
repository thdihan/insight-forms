import { PrismaClient, Prisma } from "../generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        email: "tanvirh.dihan@gmail.com",
        password: "09082000",
    },
];

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u });
    }
}

main();
