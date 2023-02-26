const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions = {
  credentials: true,
  origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
};

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Using middlewares
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//Importing routes
const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");

//Using Routes
app.use("/api/v1", postRoute);
app.use("/api/v1", userRoute);

module.exports = app;
