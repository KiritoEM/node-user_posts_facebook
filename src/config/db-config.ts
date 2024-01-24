import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    mongoose.set("strictQuery", false);

    if (!process.env.MONGODB_COMPASS_URI) {
      throw new Error("MongoDB URI is not defined");
    }

    mongoose.connect(process.env.MONGODB_COMPASS_URI);

    console.log("Connexion succesfully with mongoDB...");
  } catch (err) {
    console.log(err);
    console.log("connexion failed with Database");
    process.exit();
  }
};

export default ConnectDB;
