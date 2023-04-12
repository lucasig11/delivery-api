-- CreateTable
CREATE TABLE "delivery" (
    "id" TEXT NOT NULL,
    "items" TEXT[],
    "clientId" TEXT NOT NULL,
    "deliverymanId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "delivery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
