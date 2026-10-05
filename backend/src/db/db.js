import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connect to DB");
  } catch (error) {
    console.log("Could not connect to DB");
    console.error(error);
  }
};

export default connectDB;
