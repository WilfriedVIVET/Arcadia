import React, { useEffect, useState } from "react";
import Select from "react-select";
import { isEmpty } from "../Utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import { postNewRace, deleteRace } from "../Utils/AnimalUtils";
import { getRaces } from "../Redux/actions/races.action";

const Race = () => {
  const dispatch = useDispatch();
  const races = useSelector((state) => state.getRaces);
  const [selectedRace, setSelectedRace] = useState({});
  const [newRace, setNewRace] = useState({
    label: "",
  });
  const [indexRace, setIndexRace] = useState({
    idRace: "",
  });
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

  useEffect(() => {
    setIndexRace((preveData) => ({
      idRace: selectedRace.value,
    }));
  }, [selectedRace]);

  // Convertir l'objet race en un tableau et trier les races
  const racesArray = !isEmpty(races) ? Object.values(races) : [];

  // Options pour la liste déroulante race.
  const optionsRace = !isEmpty(racesArray)
    ? racesArray.map((race, index) => ({
        value: race.race_id,
        label: race.label,
      }))
    : [];

  //Récupération de la nouvel race.
  const handleNewRace = (e) => {
    setNewRace((prevData) => ({
      ...prevData,
      label: e.target.value,
    }));
  };

  //Ajout nouvel race.
  const submitRace = () => {
    if (!isEmpty(newRace.label)) {
      postNewRace(newRace);
    } else {
      alert("Veuillez donner un nom à votre race");
    }
  };

  //Suppression d'une race.
  const submitDeleteRace = async () => {
    if (!isEmpty(selectedRace)) {
      await deleteRace(indexRace);
      dispatch(getRaces());
    } else {
      alert("Veuillez choisir une race");
    }
  };

  return (
    <div className="container-formulaire">
      <div className="header-formulaire">
        <span>Race</span>
      </div>
      <form className="from-race">
        <span>Choisissez une race:</span>
        <Select
          styles={customStyles}
          options={optionsRace}
          value={selectedRace}
          onChange={(selectedOption) => setSelectedRace(selectedOption)}
        />

        <span>Ajouter une race:</span>
        <input type="text" className="input-race" onChange={handleNewRace} />

        <button className="button-race" onClick={submitRace}>
          Valider
        </button>
        <button className="button-race" onClick={submitDeleteRace}>
          Supprimer
        </button>
      </form>
    </div>
  );
};

export default Race;