const express = require("express");
const { getDrivers } = require("../controllers/driverController");

const router = express.Router();

router.get("/drivers", getDrivers);

module.exports = router;