/*
  Warnings:

  - You are about to drop the column `parentId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "parentId",
ADD COLUMN     "parentsId" TEXT[] DEFAULT ARRAY[]::TEXT[];
