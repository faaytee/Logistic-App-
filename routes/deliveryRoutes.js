const express = require("express");
const { createDelivery, getAssignedDeliveries } = require("../controllers/deliveriesController");

const router = express.Router();

router.post("/deliveries", createDelivery);
router.get("/deliveries/:driverId", getAssignedDeliveries)

module.exports = router;
