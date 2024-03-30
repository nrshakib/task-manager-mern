import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB is connected");
  } catch (error) {
    console.log("DB failed to connect");
    console.log(error.message);
  }
};
export default dbConnect;
