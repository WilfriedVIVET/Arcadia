const express = require("express");
const connectDB = require("./dbConnect");
const animalRoutes = require("./routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

let mongooseConnection;

// Connexion à MongoDB lors du démarrage du serveur
(async () => {
  try {
    mongooseConnection = await connectDB();
    console.log("test");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB", error);
    process.exit(1);
  }
})();

app.use(cors());
app.use(express.json());

// Utilisation des routes
app.use(animalRoutes);

// Démarrage du serveur
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Gestionnaire de fermeture propre
const gracefulShutdown = () => {
  mongoose.connection.close(() => {
    console.log("MongoDB déconnecté.");
    process.exit(0);
  });
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
