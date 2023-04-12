/*
  Warnings:

  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `delivery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `deliveryman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "delivery" DROP CONSTRAINT "delivery_clientId_fkey";

-- DropForeignKey
ALTER TABLE "delivery" DROP CONSTRAINT "delivery_deliverymanId_fkey";

-- DropTable
DROP TABLE "client";

-- DropTable
DROP TABLE "delivery";

-- DropTable
DROP TABLE "deliveryman";

-- CreateTable
CREATE TABLE "deliverymen" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "deliverymen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deliveries" (
    "id" TEXT NOT NULL,
    "items" TEXT[],
    "clientId" TEXT NOT NULL,
    "deliverymanId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliverymen_phoneNumber_key" ON "deliverymen"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "clients_phoneNumber_key" ON "clients"("phoneNumber");

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "deliverymen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
