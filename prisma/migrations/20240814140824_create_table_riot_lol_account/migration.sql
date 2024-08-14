-- CreateEnum
CREATE TYPE "Region" AS ENUM ('AMERICAS', 'ASIA', 'ESPORTS', 'EUROPE');

-- CreateTable
CREATE TABLE "RiotLolAccount" (
    "puuid" TEXT NOT NULL,
    "gameName" TEXT,
    "tagLine" TEXT,
    "region" "Region",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RiotLolAccount_pkey" PRIMARY KEY ("puuid")
);
