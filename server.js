import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import imageUpload from "./routes/imageUpload.js";
import cors from "cors";
import mongoose from "mongoose";
import Grid from "gridfs-stream";
import { fileUploadImage } from "./controllers/imageuploadController.js";

dotenv.config();

connectDB();

const conn = mongoose.connection;
conn.once("open", function () {
  Grid.gfs = Grid(conn.db, mongoose.mongo);
  Grid.gfs.collection("photos");
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/imageupload", imageUpload);

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
