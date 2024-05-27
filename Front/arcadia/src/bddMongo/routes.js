const express = require("express");
const router = express.Router();
const Animals = require("./models");
const connectDB = require("./dbConnect");

// Route pour récupérer tous les animaux
router.get("/animals", async (req, res) => {
  try {
    const animals = await Animals.find({});
    res.json(animals);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route pour insérer un nouvel animal ou mettre à jour un animal existant
router.post("/animals", async (req, res) => {
  console.log("prenom recu : ", req.body);
  try {
    const { prenom } = req.body; // Récupérer les données à insérer et le prénom
    if (prenom) {
      // Vérifier si un animal avec ce prénom existe déjà
      const existingAnimal = await Animals.findOne({ prenom: prenom });
      if (existingAnimal) {
        // Si l'animal existe, le mettre à jour
        existingAnimal.count += 1;
        await existingAnimal.save();
        res.json(existingAnimal);
      } else {
        // Si l'animal n'existe pas, insérer un nouvel animal
        const insertedAnimal = await Animals.create({
          prenom: prenom,
          count: 1,
        });
        res.json(insertedAnimal);
      }
    } else {
      // Si le prénom n'est pas fourni, renvoyer une erreur
      res.status(400).json({ message: "Le prénom de l'animal est requis." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
