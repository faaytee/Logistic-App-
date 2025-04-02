const express = require("express");
const {
  register,
  login,
  deliveryRequest,
} = require("../controllers/authController.js");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/request", deliveryRequest);

module.exports = router;
