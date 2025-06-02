/*
  Warnings:

  - You are about to drop the `FieldOption` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Form` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FormField` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FieldOption" DROP CONSTRAINT "FieldOption_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "FormField" DROP CONSTRAINT "FormField_formId_fkey";

-- DropTable
DROP TABLE "FieldOption";

-- DropTable
DROP TABLE "Form";

-- DropTable
DROP TABLE "FormField";

-- CreateTable
CREATE TABLE "form" (
    "id" TEXT NOT NULL,
    "formName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formfield" (
    "id" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "type" "FieldType" NOT NULL,
    "label" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "placeholder" TEXT,
    "multiline" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "formfield_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fieldoption" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fieldoption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "formfield" ADD CONSTRAINT "formfield_formId_fkey" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fieldoption" ADD CONSTRAINT "fieldoption_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "formfield"("id") ON DELETE CASCADE ON UPDATE CASCADE;
