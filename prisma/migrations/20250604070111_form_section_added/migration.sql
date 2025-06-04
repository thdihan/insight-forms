/*
  Warnings:

  - You are about to drop the column `formId` on the `formfield` table. All the data in the column will be lost.
  - Added the required column `sectionId` to the `formfield` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "formfield" DROP CONSTRAINT "formfield_formId_fkey";

-- AlterTable
ALTER TABLE "formfield" DROP COLUMN "formId",
ADD COLUMN     "sectionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "formsection" (
    "id" SERIAL NOT NULL,
    "sectionName" TEXT,
    "sectionDescription" TEXT,
    "formId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "formsection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "formsection" ADD CONSTRAINT "formsection_formId_fkey" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formfield" ADD CONSTRAINT "formfield_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "formsection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
