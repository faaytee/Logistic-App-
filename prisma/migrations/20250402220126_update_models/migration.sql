/*
  Warnings:

  - You are about to alter the column `status` on the `deliveryrequest` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - A unique constraint covering the columns `[deliveryId]` on the table `DeliveryRequest` will be added. If there are existing duplicate values, this will fail.
  - The required column `deliveryId` was added to the `DeliveryRequest` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `packageInfo` to the `DeliveryRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `deliveryrequest` ADD COLUMN `deliveryId` VARCHAR(191) NOT NULL,
    ADD COLUMN `packageInfo` VARCHAR(191) NOT NULL,
    MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `DeliveryRequest_deliveryId_key` ON `DeliveryRequest`(`deliveryId`);
