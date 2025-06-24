import mongoose from "mongoose";

const db = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo DB!");
  } catch (error) {
    console.log("Error while trying to connect to Mongo db");
  }
};

export default db;
