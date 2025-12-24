-- AlterTable
ALTER TABLE "User" ADD COLUMN     "achievements" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "hobbies" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "livePosition" TEXT,
ADD COLUMN     "specializations" TEXT[] DEFAULT ARRAY[]::TEXT[];
