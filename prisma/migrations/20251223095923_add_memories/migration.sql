-- CreateTable
CREATE TABLE "Memory" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "text" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,

    CONSTRAINT "Memory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MemoryRelatives" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_MemoryRelatives_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MemoryRelatives_B_index" ON "_MemoryRelatives"("B");

-- AddForeignKey
ALTER TABLE "Memory" ADD CONSTRAINT "Memory_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemoryRelatives" ADD CONSTRAINT "_MemoryRelatives_A_fkey" FOREIGN KEY ("A") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemoryRelatives" ADD CONSTRAINT "_MemoryRelatives_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
