const express = require("express");
const {
  register,
  login,
  createDelivery,
  getAssignedDeliveries,
  getDrivers,
} = require("../controllers/authController.js");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/deliveries", createDelivery);
router.get("/deliveries/:driverId", getAssignedDeliveries);
router.get("/drivers", getDrivers);

module.exports = router;
