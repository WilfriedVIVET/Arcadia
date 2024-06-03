import { combineReducers } from "redux";
import getServices from "./services.reducer";
import getHabitats from "./habitats.reducer";
import getAnimaux from "./animaux.reducer";
import getHabitatComplet from "./habitatComplet.reducer";
import getInfoAnimal from "./infoAnimal.reducer";
import getHoraire from "./horaire.reducer";
import getUtilisateur from "./utilisateur.reducer";
import getRaces from "./races.reducer";
import getAvis from "./avis.reducer";
import getAvisIsValid from "./avisIsValid.reducer";
import getRapport from "./rapport.reducer";
import alert from "./alert.reducer";

export default combineReducers({
  getServices,
  getHabitats,
  getAnimaux,
  getHabitatComplet,
  getInfoAnimal,
  getHoraire,
  getUtilisateur,
  getRaces,
  getAvis,
  getAvisIsValid,
  getRapport,
  alert,
});
