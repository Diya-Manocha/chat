import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("connected"));
    await mongoose.connect(`${process.env.MONGODB_URL}/quick-chat`);
  } catch (error) {
    console.log(error);
  }
};
