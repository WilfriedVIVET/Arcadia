import React, { useEffect, useState } from "react";
import { isEmpty } from "../Utils/Utils";
import { getHabitats } from "../Redux/actions/habitats.action";
import { useDispatch, useSelector } from "react-redux";
import { getInfoAnimal } from "../Redux/actions/infoAnimal.action";
import { postEtatHabitat } from "../Utils/HabitatUtils";
import Select from "react-select";

const Veto = () => {
  const dispatch = useDispatch();
  const habitats = useSelector((state) => state.getHabitats);
  const animals = useSelector((state) => state.getInfoAnimal);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedAnimal, setSelectedAnimal] = useState("");
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

  //Affichage de l'heure.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (selectedAnimal) {
      console.log("Animal sélectionné:", selectedAnimal);
    }
  }, [selectedAnimal]);

  //Récupération de l'état et de son habitat.
  const handleHabitat = (e) => {
    setHabitat((prevData) => ({
      ...prevData,
      habitat: e.target.name,
      etat: e.target.value,
    }));
  };

  //Envoie du nouveau commentaire sur l'état d'un habitat.
  const submitHabitat = () => {
    console.log("habitat = ", habitat);
    postEtatHabitat(habitat);
  };

  // Convertir l'objet animals en un tableau et trier les prénoms
  const animalArray = !isEmpty(animals) ? Object.values(animals) : [];

  // Options pour la liste déroulante
  const options = !isEmpty(animalArray)
    ? animalArray.map((animal, index) => ({
        value: animal.prenom,
        label: animal.prenom,
        indexAnimal: index,
      }))
    : [];

  // Style personnalisé pour les options et le contrôle
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#3d6734",
      color: "#FCFCFC",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#6c8f60" : "#3d6734",
      color: "#FCFCFC",
      "&:hover": {
        backgroundColor: "#6c8f60",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#FCFCFC",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#3d6734",
    }),
  };

  const submitRapport = () => {};

  return (
    <>
      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>Etat des habitats</span>
        </div>
        <div className="body-veto">
          {!isEmpty(habitats) &&
            habitats.map((habitat, index) => (
              <div className="bloc-habitat" key={index}>
                <div className="bloc-info">
                  <span>{habitat.nom + ":"}</span>
                  <input
                    type="text"
                    name={habitat.nom}
                    defaultValue={habitat.commentaire}
                    onChange={handleHabitat}
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
      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>Animaux</span>
        </div>
        <div className="body-veto">
          <div className="bloc-info">
            <span className="date">{currentDateTime.toLocaleString()}</span>
          </div>
          <div className="bloc-animal">
            <span className="">Choisissez un animal:</span>
            <Select
              styles={customStyles}
              options={options}
              value={selectedAnimal}
              onChange={(selectedOption) => setSelectedAnimal(selectedOption)}
            />
          </div>
          <div className="bloc-animal-info">
            <form onSubmit={submitRapport}>
              <div className="bloc-info">
                <span>Prénom:</span>
                <span className="span-formulaire">
                  {!isEmpty(selectedAnimal) &&
                    animals[selectedAnimal.indexAnimal].prenom}
                </span>
              </div>
              <div className="bloc-info">
                <span>Race:</span>
                <span className="span-formulaire">
                  {!isEmpty(selectedAnimal) &&
                    animals[selectedAnimal.indexAnimal].label}
                </span>
              </div>
              <div className="bloc-info">
                <span>Etat:</span>
                <input
                  type="text"
                  defaultValue={
                    selectedAnimal &&
                    animals[selectedAnimal.indexAnimal].etat_animal
                      ? animals[selectedAnimal.indexAnimal].etat_animal
                      : ""
                  }
                />
              </div>
              <div className="bloc-info">
                <span>Détail:</span>
                <input type="text" />
              </div>
              <div className="bloc-info">
                <span>Nourriture:</span>
                <input type="text" />
              </div>
              <div className="bloc-info">
                <span>quantité:</span>
                <input type="text" />
              </div>
              <button className="button-formulaire" type="submit">
                Valider
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Veto;
