import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const productsConnection = await mongoose.createConnection(
      process.env.PRODUCT_MONGO_URI,
    );
    console.log("MongoDB Products DB connected");
    const usersConnection = await mongoose.createConnection(
      process.env.USERS_MONGO_URI,
    );
    //usersConnection.model()
    console.log("MongoDB Users DB connected");
    return { productsConnection, usersConnection };
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
