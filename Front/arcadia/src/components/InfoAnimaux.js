import React, { useEffect, useState } from "react";
import { postInfoRapport } from "../Utils/AnimalUtils";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { getInfoAnimal } from "../Redux/actions/infoAnimal.action";
import { useAppStore } from "../storeZustand";

const InfoAnimaux = () => {
  const { roleUser } = useAppStore();

  const dispatch = useDispatch();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const animals = useSelector((state) => state.getInfoAnimal);
  const [infoAnimal, setInfoAnimal] = useState({
    animal_id: "",
    etat: "",
    detail: "",
    nourriture: "",
    grammage: "",
    nrtconseille: "",
    qtconseille: "",
    date: "",
  });

  useEffect(() => {
    if (isEmpty(animals)) {
      dispatch(getInfoAnimal());
    }
  }, [dispatch, animals]);

  // Affichage de l'heure
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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

  //Récupération des données du formulaire.
  useEffect(() => {
    if (selectedAnimal) {
      const animal = animals[selectedAnimal.indexAnimal];
      setInfoAnimal((prevData) => ({
        ...prevData,
        animal_id: animal.animal_id,
        etat: animal.etat || "",
        detail: animal.detail_etat || "",
        nourriture: animal.nourriture || "",
        grammage: animal.grammage || "",
        nrtconseille: animal.nrtconseille || "",
        qtconseille: animal.qtconseille || "",
      }));
    }
  }, [selectedAnimal, animals]);

  // Récupération des info animal
  const handleInfoAnimal = (e) => {
    const { name, value } = e.target;
    setInfoAnimal((prevData) => ({
      ...prevData,
      [name]: value,
      date: currentDateTime.toISOString(),
    }));
  };

  //Reset du formulaire.
  const resetForm = () => {
    setInfoAnimal({
      animal_id: "",
      etat: "",
      detail: "",
      nourriture: "",
      grammage: "",
      date: "",
      nrtconseille: "",
      qtconseille: "",
    });
  };

  //Envoie du rapport.
  const submitRapport = (e) => {
    e.preventDefault();
    postInfoRapport(infoAnimal);
    resetForm();
    setSelectedAnimal(null);
  };

  return (
    <div className="container-formulaire">
      <div className="header-formulaire">
        <span>Animaux</span>
      </div>
      <div className="formulaire">
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

        <form onSubmit={submitRapport} className="formulaire">
          {roleUser !== "employe" && (
            <div className="bloc-info">
              <span>Visité le:</span>
              <span className="span-formulaire">
                {!isEmpty(selectedAnimal) &&
                  animals[selectedAnimal.indexAnimal].date_rapport}
              </span>
            </div>
          )}
          <div className="bloc-info">
            <span>Prénom:</span>
            <span className="input-formulaire">
              {!isEmpty(selectedAnimal) &&
                animals[selectedAnimal.indexAnimal].prenom}
            </span>
          </div>
          <div className="bloc-info">
            <span>Race:</span>
            <span className="input-formulaire">
              {!isEmpty(selectedAnimal) &&
                animals[selectedAnimal.indexAnimal].label}
            </span>
          </div>
          <div className="bloc-info">
            <span>Etat:</span>
            {roleUser === "veterinaire" ? (
              <input
                type="text"
                name="etat"
                onChange={handleInfoAnimal}
                value={infoAnimal.etat}
                className="input-formulaire"
              />
            ) : (
              <span className="input-formulaire">{infoAnimal.etat}</span>
            )}
          </div>
          <div className="bloc-info">
            <span>Détail:</span>
            {roleUser === "veterinaire" ? (
              <input
                type="text"
                name="detail"
                onChange={handleInfoAnimal}
                value={infoAnimal.detail}
                className="input-formulaire"
              />
            ) : (
              <span className="input-formulaire">{infoAnimal.detail}</span>
            )}
          </div>
          <div className="bloc-info">
            <span>Nrt.conseil:</span>
            {roleUser === "veterinaire" ? (
              <input
                type="text"
                name="nrtconseille"
                onChange={handleInfoAnimal}
                value={infoAnimal.nrtconseille}
                className="input-formulaire"
              />
            ) : (
              <span className="input-formulaire">
                {infoAnimal.nrtconseille}
              </span>
            )}
          </div>
          <div className="bloc-info">
            <span>Nourriture:</span>
            {roleUser === "employe" ? (
              <input
                type="text"
                name="nourriture"
                onChange={handleInfoAnimal}
                value={infoAnimal.nourriture}
                className="input-formulaire"
              />
            ) : (
              <span className="input-formulaire">{infoAnimal.nourriture}</span>
            )}
          </div>
          <div className="bloc-info">
            <span>Qt.conseil:</span>
            {roleUser === "veterinaire" ? (
              <input
                type="text"
                name="qtconseille"
                onChange={handleInfoAnimal}
                value={infoAnimal.qtconseille}
                className="input-formulaire"
              />
            ) : (
              <span className="input-formulaire">{infoAnimal.qtconseille}</span>
            )}
          </div>
          <div className="bloc-info">
            <span>Quantité:</span>
            {roleUser === "employe" ? (
              <input
                type="text"
                name="grammage"
                onChange={handleInfoAnimal}
                value={infoAnimal.grammage}
                className="input-formulaire"
              />
            ) : (
              <span className="input-formulaire">{infoAnimal.grammage}</span>
            )}
          </div>
          <button className="button-formulaire" type="submit">
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoAnimaux;
