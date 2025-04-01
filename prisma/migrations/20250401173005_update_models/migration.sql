/*
  Warnings:

  - You are about to alter the column `status` on the `deliveries` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `deliveries` MODIFY `status` ENUM('PENDING', 'IN_TRANSIT', 'DELIVERED', 'CANCELLED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `route` ALTER COLUMN `updatedAt` DROP DEFAULT;
