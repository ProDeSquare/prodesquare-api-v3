import mongoose from "mongoose";

const connection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};

export default connection;
