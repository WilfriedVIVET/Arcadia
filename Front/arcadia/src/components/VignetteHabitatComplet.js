import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import axios from "axios";
import store from "../Redux/store/store";
import { getInfoAnimal } from "../Redux/actions/infoAnimal.action";

const VignetteHabitatComplet = ({ habitat }) => {
  const dispatch = useDispatch();
  const animaux = useSelector((state) => state.getAnimaux);

  useEffect(() => {
    if (isEmpty(store.getState().getInfoAnimal))
      store.dispatch(getInfoAnimal());
  }, [dispatch]);

  const [isLoading, setIsLoading] = useState(true);
  const [imagePath, setImagePath] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [portrait, setPortrait] = useState(false);

  //Attente que animaux finisse de se charger
  useEffect(() => {
    if (!isEmpty(animaux)) {
      setIsLoading(false);
    }
  }, [animaux]);

  // Filtrage des animaux par habitat lorsque les animaux sont chargés.
  useEffect(() => {
    if (!isLoading) {
      setAnimals(animaux.filter((animal) => animal.nom === habitat.nom));
    }
  }, [animaux, habitat.nom, isLoading]);

  //Fonction qui ajoute "1" au nombre de consultation de l'animal.
  const udpateConsultation = async (prenom) => {
    try {
      await axios.post("http://localhost:3008/animals", { prenom });
    } catch (error) {
      console.error("problème bdd mongo vignette", error);
    }
  };

  useMemo(() => {
    udpateConsultation(selectedAnimal.prenom);
  }, [selectedAnimal]);

  //Remplissage info animal dans vignette.
  const handleInfo = (animal) => {
    setSelectedAnimal(animal);
    setImagePath(animal.image_path);
  };

  // Mise à jour de l'image lorsque selectedAnimal change.
  useEffect(() => {
    if (selectedAnimal.animal_id) {
      const animal = animaux.find(
        (animal) => animal.animal_id === selectedAnimal.animal_id
      );
      if (animal) {
        const baseURL = process.env.REACT_APP_IMAGE_URL;
        const imageURL = `${baseURL}${animal.image_path.replace(
          /^.*[\\/]/,
          ""
        )}`;
        setImagePath(imageURL);
      }
    }
  }, [selectedAnimal, animaux]);

  //déploiement de la fenetre info.
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  //Grossissement du portrait de l'animal.
  const showPortrait = () => {
    setPortrait(!portrait);
  };

  return (
    <div className="habitat">
      <span>{habitat.nom}</span>
      <img
        src={`data:image/jpg;base64,${habitat.image_data}`}
        alt={`habitat ${habitat.nom}`}
        onClick={toggleInfo}
      />
      <div
        className="information"
        style={{ display: showInfo ? "flex" : "none" }}
      >
        <span>Description:</span>
        <p className="description">{habitat.description}</p>
        <div className="trait"></div>
        <span>Nos Pensionnaires:</span>
        <div className="info">
          <ul>
            {!isEmpty(animals) &&
              animals.map((animal, index) => (
                <li
                  className="li-animal"
                  key={index}
                  value={animal.prenom}
                  onClick={() => handleInfo(animal)}
                >
                  {animal.prenom}
                </li>
              ))}
          </ul>
          <div className="info-animal" onClick={showPortrait}>
            <img
              className={portrait ? " grand-portrait" : "petit-portrait"}
              src={imagePath || "logo.png"}
              alt={selectedAnimal ? selectedAnimal.prenom : "logo arcadia"}
            />

            <div className="info-info">
              <span>Prénom:{selectedAnimal ? selectedAnimal.prenom : ""} </span>
              <span>Race: {selectedAnimal ? selectedAnimal.label : ""} </span>
              <span>Etat: {selectedAnimal ? selectedAnimal.etat : ""} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VignetteHabitatComplet;
