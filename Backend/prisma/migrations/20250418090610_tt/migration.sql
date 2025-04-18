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
CREATE TABLE "Toppings" (
    "toppingId" TEXT NOT NULL,
    "toppingName" TEXT NOT NULL,
    "toppingPrice" DOUBLE PRECISION NOT NULL,
    "toppingDescription" TEXT NOT NULL,
    "toppingImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Toppings_pkey" PRIMARY KEY ("toppingId")
);

-- CreateTable
CREATE TABLE "Orders" (
    "orderId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "iceCreamId" TEXT NOT NULL,
    "toppingId" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL DEFAULT 'pending',
    "orderTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "OrderItems" (
    "orderItemId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "iceCreamId" TEXT NOT NULL,
    "toppingId" TEXT NOT NULL,
    "itemQuantity" INTEGER NOT NULL,
    "itemPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderItems_pkey" PRIMARY KEY ("orderItemId")
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
    "paymentStatus" TEXT NOT NULL,
    "paymentAmount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("paymentId")
);

-- CreateTable
CREATE TABLE "rating" (
    "ratingId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "iceCreamId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "ratingValue" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("ratingId")
);
