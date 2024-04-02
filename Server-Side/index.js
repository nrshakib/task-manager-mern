import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbConnect from "./database/dbConnect.js";

const app = express();
dotenv.config();

// PORT
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Listen Server
app.listen(port, async () => {
  console.log(`Server running on ${port}`);
  await dbConnect();
});
