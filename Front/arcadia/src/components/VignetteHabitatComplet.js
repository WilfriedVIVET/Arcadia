import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";

const VignetteHabitatComplet = ({ habitat }) => {
  const infoAnimal = useSelector((state) => state.getInfoAnimal);
  const listeAnimaux = habitat.liste_animaux.split(",");

  const [index, setIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [animal, setAnimal] = useState("");

  //déploiement de la fenetre info.
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  //Récupération de l'index de l'animal selectionné
  const findIndex = (searchAnimal) => {
    const index = infoAnimal.findIndex(
      (animal) => animal.prenom === searchAnimal
    );
    return index;
  };

  const handleAnimalInfo = (e) => {
    setAnimal(e.target.textContent);
  };

  useEffect(() => {
    const findIndex = (searchAnimal) => {
      if (!isEmpty(infoAnimal)) {
        const index = infoAnimal.findIndex(
          (animal) => animal.prenom === searchAnimal
        );

        return index;
      }
      return 0;
    };

    setIndex(findIndex(animal));
  }, [animal, infoAnimal]);

  return (
    <div className="habitat">
      <span>{habitat.nom}</span>
      <img
        src={habitat.image_path}
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
            {listeAnimaux.map((animal, index) => (
              <li className="li-animal" key={index} onClick={handleAnimalInfo}>
                {animal}
              </li>
            ))}
          </ul>
          <div className="info-animal">
            <img
              src={infoAnimal[index]?.image_path ?? "logo.png"}
              alt={infoAnimal[index]?.label ?? "image animal"}
            />
            <div className="info-info">
              <span>Prénom: {infoAnimal[index]?.prenom ?? ""}</span>
              <span>Race: {infoAnimal[index]?.label ?? ""}</span>
              <span>Etat {infoAnimal[index]?.etat ?? ""}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VignetteHabitatComplet;
