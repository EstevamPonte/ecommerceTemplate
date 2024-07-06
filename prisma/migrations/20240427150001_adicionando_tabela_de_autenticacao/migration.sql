-- CreateTable
CREATE TABLE "UserAlth" (
    "id" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserAlth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAlth_userId_key" ON "UserAlth"("userId");

-- AddForeignKey
ALTER TABLE "UserAlth" ADD CONSTRAINT "UserAlth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
