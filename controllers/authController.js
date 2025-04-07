const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const AppError = require("../errors/AppError");
const { json } = require("express");
const { v4: uuidv4 } = require("uuid");

const { sendMail } = require("./mail");

const prisma = new PrismaClient();

const register = async (req, res, next) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!email || !password || !fullName) {
      return next(new AppError("All fields are required", 400));
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return next(new AppError("Email is already in use", 400));
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role: role || "USER",
      },
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("Email and password are required", 400));
    }

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return next(new AppError("Invalid credentials", 401));
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new AppError("Invalid credentials", 401));
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

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

    const availableDriver = await prisma.User.findFirst({
      where: {
        role: "DRIVER",
        status: "AVAILABLE", // Ensure driver is available
      },
    });
    console.log("Available Driver Object:", availableDriver);

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

    const subject = "New Delivery Assignment";
    const htmlContent = `
      <h2>Hi ${availableDriver.firstName || "Driver"},</h2>
      <p>You have been assigned a new delivery request.</p>
      <p><strong>Pickup:</strong> ${pickupLocation}</p>
      <p><strong>Dropoff:</strong> ${dropoffLocation}</p>
      <p><strong>Package Info:</strong> ${packageInfo}</p>
      <p><strong>Customer Phone:</strong> ${receiversPhone}</p>
      <br>
      <p>Kindly check your dashboard for more details.</p>
    `;

    console.log("Sending email to:", availableDriver.email);

    await sendMail(availableDriver.email, subject, htmlContent);

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

    if (!driverId) {
      throw new AppError("Driver ID is required", 400);
    }

    // Fetch all deliveries assigned to the driver with PENDING status
    const deliveries = await prisma.deliveries.findMany({
      where: {
        driverId: parseInt(driverId), // Ensure driverId is correct and matches type
        status: "PENDING", // Only fetch deliveries that are still pending
      },
      include: {
        route: true, // Include route details
        deliveryRequest: {
          include: {
            user: true, // Include user info (the person who requested the delivery)
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

const getDrivers = async (req, res, next) => {
  try {
    // Fetch all drivers
    const drivers = await prisma.user.findMany({
      where: {
        role: "DRIVER", // Only fetch users with the role 'DRIVER'
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        vehicle: true,
        licenseNumber: true,
        status: true,
      },
    });

    if (drivers.length === 0) {
      return res.status(404).json({
        message: "No drivers found",
      });
    }

    return res.status(200).json({
      message: "Drivers fetched successfully",
      drivers,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  createDelivery,
  getAssignedDeliveries,
  getDrivers,
};
