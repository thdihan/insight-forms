/*
  Warnings:

  - The primary key for the `form` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `form` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `formfield` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `formfield` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `fieldId` on the `fieldoption` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `formId` on the `formfield` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "fieldoption" DROP CONSTRAINT "fieldoption_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "formfield" DROP CONSTRAINT "formfield_formId_fkey";

-- AlterTable
ALTER TABLE "fieldoption" DROP COLUMN "fieldId",
ADD COLUMN     "fieldId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "form" DROP CONSTRAINT "form_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "form_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "formfield" DROP CONSTRAINT "formfield_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "formId",
ADD COLUMN     "formId" INTEGER NOT NULL,
ADD CONSTRAINT "formfield_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "formfield" ADD CONSTRAINT "formfield_formId_fkey" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fieldoption" ADD CONSTRAINT "fieldoption_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "formfield"("id") ON DELETE CASCADE ON UPDATE CASCADE;
