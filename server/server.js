const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));
app.use("/auth", authController);
app.use("/product", productController);
app.use("/upload", uploadController);

// Port
const port = process.env.PORT || 8080;

// start our server
//listen PORT
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});

// server is on port 5000, client is on port 3000,
// we are going to get a cors ERROR!!, but cors() removes that's error
