/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `deliverymen` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `deliverymen` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `deliverymen` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "clients_phoneNumber_key";

-- DropIndex
DROP INDEX "deliverymen_phoneNumber_key";

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "phoneNumber",
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "deliverymen" DROP COLUMN "phoneNumber",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "deliverymen_email_key" ON "deliverymen"("email");
