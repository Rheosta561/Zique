const mongoose = require('mongoose');

// Replace with your MongoDB Cluster URL
const mongoURI = "mongodb+srv://manubhav731:fjtuDLUezxA7Wh4C@zique.bfuwi.mongodb.net/?retryWrites=true&w=majority&appName=zique";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI); // Simplified connection
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error.message);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;
