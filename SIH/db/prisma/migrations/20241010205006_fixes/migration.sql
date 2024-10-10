/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Freelancer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FreelancerToSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_clientId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectFreelancer" DROP CONSTRAINT "ProjectFreelancer_freelancerId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectFreelancer" DROP CONSTRAINT "ProjectFreelancer_projectId_fkey";

-- DropForeignKey
ALTER TABLE "_FreelancerToSkill" DROP CONSTRAINT "_FreelancerToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_FreelancerToSkill" DROP CONSTRAINT "_FreelancerToSkill_B_fkey";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "Freelancer";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "_FreelancerToSkill";

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "ProjectStatus" NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "freelancer" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "freelancer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_freelancerToskill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_freelancerToskill_AB_unique" ON "_freelancerToskill"("A", "B");

-- CreateIndex
CREATE INDEX "_freelancerToskill_B_index" ON "_freelancerToskill"("B");

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectFreelancer" ADD CONSTRAINT "ProjectFreelancer_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectFreelancer" ADD CONSTRAINT "ProjectFreelancer_freelancerId_fkey" FOREIGN KEY ("freelancerId") REFERENCES "freelancer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_freelancerToskill" ADD CONSTRAINT "_freelancerToskill_A_fkey" FOREIGN KEY ("A") REFERENCES "freelancer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_freelancerToskill" ADD CONSTRAINT "_freelancerToskill_B_fkey" FOREIGN KEY ("B") REFERENCES "skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
