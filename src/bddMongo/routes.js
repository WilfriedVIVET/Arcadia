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
  try {
    const { prenom } = req.body;
    if (prenom) {
      const existingAnimal = await Animals.findOne({ prenom: prenom });
      if (existingAnimal) {
        existingAnimal.count += 1;
        await existingAnimal.save();
        res.json(existingAnimal);
      } else {
        const insertedAnimal = await Animals.create({
          prenom: prenom,
          count: 1,
        });
        res.json(insertedAnimal);
      }
    } else {
      res.status(400).json({ message: "Le prénom de l'animal est requis." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
