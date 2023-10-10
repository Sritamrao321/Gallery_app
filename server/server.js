// import express from "express";
// import colors from "colors";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";
// import cors from "cors";
// //import hbs from "express-handlebars";

// //configure env
// dotenv.config();

// //databse config
// connectDB();

// //rest object
// const app = express();

// //middelwares
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// //routes

// app.use("/api/v1/auth", authRoutes);
// //app.use("/", require("./routes/router.js"));

// //PORT
// const PORT = process.env.PORT || 8080;

// //run listen
// app.listen(PORT, () => {
//   console.log(
//     `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
//       .white
//   );
// });

// //const express= require('express')
// // const hbs = require("express-handlebars");
// // const path = require("path");

// // app.use(express.json());

// // app.use(express.static(path.join(__dirname, "public")));

// // app.set("view engine", "hbs");
// // app.engine(
// //   "hbs",
// //   hbs({
// //     extname: "hbs",
// //     defaultview: "default",
// //     layoutDir: path.join(__dirname, "views"),
// //     partialDir: path.join(__dirname, "views/partials"),
// //   })
// // );

// app.listen(8080, () => console.log(`serveris stated on localhost3000`));


import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
//import categoryRoutes from "./routes/categoryRoutes.js";
//import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
//app.use("/api/v1/category", categoryRoutes);
//app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
