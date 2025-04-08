const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid");
const AppError = require("../errors/AppError");

const prisma = new PrismaClient();

const createDelivery = async (req, res, next) => {
  try {
    const {
      userId,
      pickupLocation,
      dropoffLocation,
      receiversPhone,
      packageInfo,
    } = req.body;

    if (
      !userId ||
      !pickupLocation ||
      !dropoffLocation ||
      !receiversPhone ||
      !packageInfo
    ) {
      throw new AppError("All fields are required", 400);
    }

    const deliveryRequest = await prisma.deliveryRequest.create({
      data: {
        userId,
        pickupLocation,
        dropoffLocation,
        receiversPhone,
        packageInfo,
        deliveryId: uuidv4(),
        status: "PENDING",
      },
      include: {
        user: true, // This will populate the related 'user' data
      },
    });

    const availableDriver = await prisma.user.findFirst({
      where: {
        role: "DRIVER",
        status: "AVAILABLE", // Ensure driver is available
      },
    });

    if (!availableDriver) {
      throw new AppError("No available drivers available", 400);
    }

    const delivery = await prisma.deliveries.create({
      data: {
        deliveryId: deliveryRequest.deliveryId,
        status: "PENDING", // driver: availableDriver,
        driverId: availableDriver.id, // Assign the available driver
        routeId: 1, // You'll need to adjust this to pick an appropriate route
      },
    });

    res.status(201).json({
      message: "Delivery request created and driver assigned successfully",
      deliveryRequest: {
        ...deliveryRequest,
        user: deliveryRequest.user,
        driver: availableDriver,
      },
      delivery,
    });
  } catch (error) {
    next(error);
  }
};

const getAssignedDeliveries = async (req, res, next) => {
  try {
    const { driverId } = req.params; // Get the driver ID from the URL params

    console.log(driverId);
    

    if (!driverId) {
      throw new AppError("Driver ID is required", 400);
    }

    // Fetch all deliveries assigned to the driver with PENDING status
    const deliveries = await prisma.deliveries.findMany({
      where: {
        driverId: parseInt(driverId),  // Ensure driverId is correct and matches type
        status: "PENDING",  // Only fetch deliveries that are still pending
      },
      include: {
        route: true, // Include route details
        deliveryRequest: {
          include: {
            user: true,  // Include user info (the person who requested the delivery)
          },
        },
      },
    });

    if (!deliveries || deliveries.length === 0) {
      throw new AppError("No assigned deliveries found", 404);
    }

    res.status(200).json({
      message: "Deliveries fetched successfully",
      deliveries,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = { createDelivery, getAssignedDeliveries };
