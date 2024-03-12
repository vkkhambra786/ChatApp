import mongoose from "mongoose";

const connectToMongoBb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI),
      console.log("connected to mongoDB");
  } catch (error) {
    console.log("error for mongo db connection");
  }
};

export default connectToMongoBb;
