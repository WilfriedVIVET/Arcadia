import { combineReducers } from "redux";
import getServices from "./services.reducer";
import getHabitats from "./habitats.reducer";
import getAnimaux from "./animaux.reducer";
import getHabitatComplet from "./habitatComplet.reducer";
import getInfoAnimal from "./infoAnimal.reducer";

export default combineReducers({
  getServices,
  getHabitats,
  getAnimaux,
  getHabitatComplet,
  getInfoAnimal,
});
