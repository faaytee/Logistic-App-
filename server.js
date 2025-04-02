require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const authRoutes = require("./routes/authRoutes.js");
const deliveryRoutes = require("./routes/deliveryRoutes.js");
const driverRoutes = require("./routes/driverRoutes.js");
const errorHandler = require("./middleware/errorHandler.js");

const prisma = new PrismaClient();

const port = process.env.APP_PORT || 3000;
const app = express();

app.use(express.json());

// app.get("/drivers", async (req, res) => {
//   try {
//     const drivers = await prisma.driver.findMany();
//     res.json(drivers);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching drivers" });
//   }
// });

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api", authRoutes);
app.use("/api", deliveryRoutes);
app.use("/api", driverRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app is listening at ${port}`);
});
