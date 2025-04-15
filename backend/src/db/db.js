import mongoose from "mongoose";

const dbConnection = async ( req, res) => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("MongoDB Connected successfully");
    res.send("MongoDB Connected successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("MongoDB connection failed");
  }
};

export { dbConnection };
