const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const Animals = mongoose.model("Animals", animalSchema);

module.exports = Animals;
