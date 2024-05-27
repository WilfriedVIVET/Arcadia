require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
