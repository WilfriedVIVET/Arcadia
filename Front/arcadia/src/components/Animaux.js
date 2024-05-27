import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getHabitats } from "../Redux/actions/habitats.action";
import { getRaces } from "../Redux/actions/races.action";
import { getAnimaux } from "../Redux/actions/animaux.action";
import { isEmpty } from "../Utils/Utils";
import { deleteAnimal, postAnimal } from "../Utils/AnimalUtils";
import store from "../Redux/store/store";

const Animaux = () => {
  const dispatch = useDispatch();
  const habitats = useSelector((state) => state.getHabitats);
  const races = useSelector((state) => state.getRaces);
  const animaux = useSelector((state) => state.getAnimaux);

  useEffect(() => {
    if (isEmpty(store.getState().getHabitats)) store.dispatch(getHabitats());
    if (isEmpty(store.getState().getRaces)) store.dispatch(getRaces());
    if (isEmpty(store.getState().getAnimaux)) store.dispatch(getAnimaux());
  }, [dispatch]);

  const [droppedImage, setDroppedImage] = useState(null);
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedHabitat, setSelectedHabitat] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [newAnimal, setNewAnimal] = useState({
    prenom: "",
    race: "",
    habitat: "",
    image_data: "",
  });

  //Récupération de l id de l animal à supprimer.
  const [animaIdSelected, setAnimalIdSelected] = useState({
    animal_id: "",
  });

  useEffect(() => {
    setAnimalIdSelected((prevData) => ({
      ...prevData,
      animal_id: selectedAnimal.value,
    }));
  }, [selectedAnimal]);

  //Drag and Drop de la photo de l'habitat.
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setDroppedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Convertir l'objet habitats en un tableau et trier les habitats
  const habitatsArray = !isEmpty(habitats) ? Object.values(habitats) : [];

  // Options pour la liste déroulante habitat.
  const optionsHabitat = !isEmpty(habitatsArray)
    ? habitatsArray.map((habitat, index) => ({
        value: habitat.nom,
        label: habitat.nom,
      }))
    : [];

  // Convertir l'objet race en un tableau et trier les races
  const racesArray = !isEmpty(races) ? Object.values(races) : [];

  // Options pour la liste déroulante race.
  const optionsRace = !isEmpty(racesArray)
    ? racesArray.map((race, index) => ({
        value: race.label,
        label: race.label,
      }))
    : [];

  // Convertir l'objet animaux en un tableau et trier les animaux
  const animauxArray = !isEmpty(animaux) ? Object.values(animaux) : [];

  // Options pour la liste déroulante animaux.
  const optionsAnimaux = !isEmpty(animauxArray)
    ? animauxArray.map((animal, index) => ({
        value: animal.animal_id,
        label: animal.prenom,
      }))
    : [];

  //Récupération des infos de l'animal.
  const handleInfo = (e) => {
    const { name, value } = e.target;
    setNewAnimal((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Récupération des select.
  useEffect(() => {
    setNewAnimal((prevData) => ({
      ...prevData,
      habitat: selectedHabitat.label,
      race: selectedRace.label,
    }));
  }, [selectedHabitat, selectedRace]);

  //Récupération de l'image de l'animal.
  useEffect(() => {
    setNewAnimal((prevData) => ({
      ...prevData,
      image_data: droppedImage,
    }));
  }, [droppedImage]);

  //Création de l animal.
  const submitAnimal = async (e) => {
    e.preventDefault();
    postAnimal(newAnimal);
    dispatch(getAnimaux);
  };

  //Suppression de l'animal
  const handleDeleteAnimal = () => {
    deleteAnimal(animaIdSelected);
    console.log("test ", animaIdSelected);
    dispatch(getAnimaux);
  };

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

  return (
    <div
      className="container-formulaire"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="header-formulaire">
        <span>ANIMAUX</span>
      </div>

      <form onSubmit={submitAnimal} className="formulaire">
        <label htmlFor="prenom" className="label-formulaire">
          Prenom:
        </label>
        <input
          type="text"
          name="prenom"
          className="input-formulaire"
          onChange={handleInfo}
        />
        <label className="label-formulaire">Choisissez une race:</label>
        <Select
          styles={customStyles}
          options={optionsRace}
          value={selectedRace}
          onChange={(selectedOption) => setSelectedRace(selectedOption)}
        />
        <label className="label-formulaire">Choisissez une habitat:</label>
        <Select
          styles={customStyles}
          options={optionsHabitat}
          value={selectedHabitat}
          onChange={(selectedOption) => setSelectedHabitat(selectedOption)}
        />
        <div className="deposer">
          {droppedImage ? (
            <img
              src={droppedImage}
              alt="Dropped"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : (
            <span> &#x2192;DEPOSER L'IMAGE ICI&#x2190; </span>
          )}
        </div>

        <button className="button-formulaire">Valider</button>
      </form>
      <div className="formulaire">
        <label className="label-formulaire">Animal à supprimer:</label>
        <Select
          styles={customStyles}
          options={optionsAnimaux}
          value={selectedAnimal}
          onChange={(selectedOption) => setSelectedAnimal(selectedOption)}
        />
        <button className="button-formulaire" onClick={handleDeleteAnimal}>
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Animaux;
