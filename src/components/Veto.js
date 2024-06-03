import React, { useEffect, useState } from "react";
import { isEmpty } from "../Utils/Utils";
import { getHabitats } from "../Redux/actions/habitats.action";
import { useDispatch, useSelector } from "react-redux";
import { getInfoAnimal } from "../Redux/actions/infoAnimal.action";
import { postEtatHabitat } from "../Utils/HabitatUtils";
import InfoAnimaux from "./InfoAnimaux";

const Veto = () => {
  const dispatch = useDispatch();
  const habitats = useSelector((state) => state.getHabitats);
  const animals = useSelector((state) => state.getInfoAnimal);
  const [habitat, setHabitat] = useState({
    habitat: "",
    etat: "",
  });

  useEffect(() => {
    if (isEmpty(habitats)) {
      dispatch(getHabitats());
    }
    if (isEmpty(animals)) {
      dispatch(getInfoAnimal());
    }
  }, [dispatch, habitats, animals]);

  // Récupération de l'état et de son habitat
  const handleHabitat = (e) => {
    setHabitat((prevData) => ({
      ...prevData,
      habitat: e.target.name,
      etat: e.target.value,
    }));
  };

  // Envoie du nouveau commentaire sur l'état d'un habitat
  const submitHabitat = () => {
    postEtatHabitat(habitat);
  };

  return (
    <>
      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>Etat des habitats</span>
        </div>
        <div className="formulaire">
          {!isEmpty(habitats) &&
            habitats.map((habitat, index) => (
              <div className="bloc-habitat" key={index}>
                <div className="bloc-info">
                  <span className="label-formulaire">{habitat.nom + ":"}</span>
                  <input
                    type="text"
                    name={habitat.nom}
                    defaultValue={habitat.commentaire}
                    onChange={handleHabitat}
                    className="input-formulaire"
                  />
                </div>
                <div className="bloc-button">
                  <button className="button-formulaire" onClick={submitHabitat}>
                    Valider
                  </button>
                </div>
                <div className="trait"></div>
              </div>
            ))}
        </div>
      </div>
      <InfoAnimaux />
    </>
  );
};

export default Veto;
