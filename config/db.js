import mongoose from "mongoose";

export const connectDB = async ({ DB_URL }) => {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`[ERROR] MongoDB connection error`, error);
  }
};
