import mongoose from "mongoose";

const connection = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};

export default connection;
