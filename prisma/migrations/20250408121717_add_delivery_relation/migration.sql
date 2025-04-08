-- AddForeignKey
ALTER TABLE `Deliveries` ADD CONSTRAINT `Deliveries_deliveryId_fkey` FOREIGN KEY (`deliveryId`) REFERENCES `DeliveryRequest`(`deliveryId`) ON DELETE RESTRICT ON UPDATE CASCADE;
