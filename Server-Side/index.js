import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./config/config.env" });

// PORT
// const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Listen Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
