-- DropForeignKey
ALTER TABLE "formfield" DROP CONSTRAINT "formfield_formId_fkey";

-- AddForeignKey
ALTER TABLE "formfield" ADD CONSTRAINT "formfield_formId_fkey" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE CASCADE ON UPDATE CASCADE;
