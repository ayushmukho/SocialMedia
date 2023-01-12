const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Importing routes
const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");

//Using Routes
app.use("/api/v1", postRoute);
app.use("/api/v1", userRoute);

module.exports = app;
