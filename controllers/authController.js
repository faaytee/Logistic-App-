const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const AppError = require("../errors/AppError");
const { json } = require("express");

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
      { expiresIn: "7d" }
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

const deliveryRequest = async function (req, res) {
  try {
    const { userId, pickupLocation, dropoffLocation, receiversPhone } =
      req.body;

    if ((!userId, !pickupLocation || !dropoffLocation || !receiversPhone)) {
      return res.json({ message: "missing field" });
    }

    const request = await prisma.deliveryRequest.create({
      data: { userId, pickupLocation, dropoffLocation, receiversPhone },
    });
    res.status(201).json({ message: "request created", request });
  } catch (error) {
    res.status(500).json({ error: "error creating request" });
  }
};

module.exports = { register, login, deliveryRequest };
