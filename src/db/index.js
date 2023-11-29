import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
    });

    console.log(`\nMongoDb Connected Successfully !! DB HOST: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection Failed: " + error);
    process.exit(1);
  }
};

export default connectDB;
