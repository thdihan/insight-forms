-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('admin', 'user');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Unknown User',
ADD COLUMN     "role" "UserType" NOT NULL DEFAULT 'user';
