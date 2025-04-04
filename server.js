require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const authRoutes = require("./routes/authRoutes.js");
const errorHandler = require("./middleware/errorHandler.js");

const prisma = new PrismaClient();

const port = process.env.APP_PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api", authRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app is listening at ${port}`);
});
