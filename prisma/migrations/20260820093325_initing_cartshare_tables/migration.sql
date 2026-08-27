-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'USER');

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "joinCode" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cartId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInCart" (
    "userId" INTEGER NOT NULL,
    "cartId" INTEGER NOT NULL,

    CONSTRAINT "UserInCart_pkey" PRIMARY KEY ("userId","cartId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cart_joinCode_key" ON "Cart"("joinCode");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInCart" ADD CONSTRAINT "UserInCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInCart" ADD CONSTRAINT "UserInCart_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
