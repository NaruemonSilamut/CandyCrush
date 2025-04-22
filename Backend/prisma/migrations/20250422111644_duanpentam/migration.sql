/*
  Warnings:

  - Added the required column `iceCreamId` to the `Topping` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Topping" ADD COLUMN     "iceCreamId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "flavor" (
    "flavorId" TEXT NOT NULL,
    "flavorName" TEXT NOT NULL,
    "flavorImage" TEXT,
    "iceCreamId" TEXT NOT NULL,

    CONSTRAINT "flavor_pkey" PRIMARY KEY ("flavorId")
);

-- AddForeignKey
ALTER TABLE "Topping" ADD CONSTRAINT "Topping_iceCreamId_fkey" FOREIGN KEY ("iceCreamId") REFERENCES "IceCream"("iceCreamId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flavor" ADD CONSTRAINT "flavor_iceCreamId_fkey" FOREIGN KEY ("iceCreamId") REFERENCES "IceCream"("iceCreamId") ON DELETE RESTRICT ON UPDATE CASCADE;
