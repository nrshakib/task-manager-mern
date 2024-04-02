import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Your Name"],
    minLength: [3, "Name must contain at least 3 characters"],
    maxLength: [30, "Name can contain at most 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Provide Your Email"],
    unique: [true, "User Already Exists with this email"],
    validate: [validator.isEmail, "Please Provide Valid Email"],
  },
  phone: {
    type: Number,
    required: [true, "Please Provide Your Phone Number"],
  },
  password: {
    type: String,
    required: [true, "Please Provide Your Password"],
    minLength: [8, "Password must contain at least 8 characters"],
    maxLength: [32, "Name can contain at most 32 characters"],
  },
});
