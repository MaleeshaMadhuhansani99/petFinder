/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Pet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "profileImage" TEXT;

-- DropTable
DROP TABLE "Pet";
