/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Color` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Gearshift` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Color.title_unique` ON `Color`(`title`);

-- CreateIndex
CREATE UNIQUE INDEX `Gearshift.title_unique` ON `Gearshift`(`title`);
