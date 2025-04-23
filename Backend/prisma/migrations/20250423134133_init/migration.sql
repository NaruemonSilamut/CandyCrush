-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "userFirstname" TEXT NOT NULL,
    "userLastname" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userPassword" TEXT NOT NULL,
    "userPhone" TEXT NOT NULL,
    "userImage" TEXT,
    "userRole" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "IceCream" (
    "iceCreamId" TEXT NOT NULL,
    "iceCreamName" TEXT NOT NULL,
    "iceCreamPrice" DOUBLE PRECISION NOT NULL,
    "iceCreamDescription" TEXT NOT NULL,
    "iceCreamImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IceCream_pkey" PRIMARY KEY ("iceCreamId")
);

-- CreateTable
CREATE TABLE "Topping" (
    "toppingId" TEXT NOT NULL,
    "toppingName" TEXT NOT NULL,
    "toppingImage" TEXT,
    "iceCreamId" TEXT,

    CONSTRAINT "Topping_pkey" PRIMARY KEY ("toppingId")
);

-- CreateTable
CREATE TABLE "flavor" (
    "flavorId" TEXT NOT NULL,
    "flavorName" TEXT NOT NULL,
    "flavorImage" TEXT,
    "iceCreamId" TEXT,

    CONSTRAINT "flavor_pkey" PRIMARY KEY ("flavorId")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "iceCreamId" TEXT NOT NULL,
    "toppingId" TEXT NOT NULL,
    "orderTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "orderItemId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "iceCreamId" TEXT NOT NULL,
    "toppingId" TEXT NOT NULL,
    "itemQuantity" INTEGER NOT NULL,
    "itemPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("orderItemId")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cartId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "iceCreamId" TEXT NOT NULL,
    "toppingId" TEXT NOT NULL,
    "itemQuantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cartId")
);

-- CreateTable
CREATE TABLE "Payment" (
    "paymentId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "paymentAmount" DOUBLE PRECISION NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("paymentId")
);

-- CreateTable
CREATE TABLE "Rating" (
    "ratingId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "iceCreamId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "ratingValue" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("ratingId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_iceCreamId_toppingId_key" ON "Cart"("userId", "iceCreamId", "toppingId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_orderId_key" ON "Payment"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_orderId_key" ON "Rating"("userId", "orderId");

-- AddForeignKey
ALTER TABLE "Topping" ADD CONSTRAINT "Topping_iceCreamId_fkey" FOREIGN KEY ("iceCreamId") REFERENCES "IceCream"("iceCreamId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flavor" ADD CONSTRAINT "flavor_iceCreamId_fkey" FOREIGN KEY ("iceCreamId") REFERENCES "IceCream"("iceCreamId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_iceCreamId_fkey" FOREIGN KEY ("iceCreamId") REFERENCES "IceCream"("iceCreamId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_toppingId_fkey" FOREIGN KEY ("toppingId") REFERENCES "Topping"("toppingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_iceCreamId_fkey" FOREIGN KEY ("iceCreamId") REFERENCES "IceCream"("iceCreamId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_toppingId_fkey" FOREIGN KEY ("toppingId") REFERENCES "Topping"("toppingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_iceCreamId_fkey" FOREIGN KEY ("iceCreamId") REFERENCES "IceCream"("iceCreamId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_toppingId_fkey" FOREIGN KEY ("toppingId") REFERENCES "Topping"("toppingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_iceCreamId_fkey" FOREIGN KEY ("iceCreamId") REFERENCES "IceCream"("iceCreamId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;
