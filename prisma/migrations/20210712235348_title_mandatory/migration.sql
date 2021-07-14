/*
  Warnings:

  - Made the column `title` on table `Color` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Gearshift` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Color` MODIFY `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Gearshift` MODIFY `title` VARCHAR(191) NOT NULL;
