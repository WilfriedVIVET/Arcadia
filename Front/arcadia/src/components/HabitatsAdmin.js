import React, { useEffect, useState } from "react";
import {
  postHabitat,
  deleteHabitat,
  updateHabitat,
} from "../Utils/HabitatUtils";

import { getHabitats } from "../Redux/actions/habitats.action";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";

const HabitatsAdmin = () => {
  const dispatch = useDispatch();
  const habitats = useSelector((state) => state.getHabitats || []);
  const [droppedImage, setDroppedImage] = useState(null);
  const [indexHabitat, setIndexHabitat] = useState("");

  /******************************Update de l habitat*************************************************************** */
  //update de l'habitat
  const [habitat, setHabitat] = useState({
    habitat_id: "0",
    nom: "",
    descriptionHabitat: "",
    image_data: "",
  });

  //Remise à zéro du formulaire
  const resetForm = () => {
    setHabitat({
      habitat_id: "0",
      nom: "",
      descriptionHabitat: "",
      image_data: "",
    });
    setDroppedImage(null);
    setIndexHabitat("");
  };

  //Récupération des infos de l'habitat.
  const handleInfo = (e) => {
    const { name, value } = e.target;
    setHabitat((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (indexHabitat !== "" && habitats[indexHabitat]) {
      const selectedHabitat = habitats[indexHabitat];
      setHabitat({
        habitat_id: selectedHabitat.habitat_id,
        nom: selectedHabitat.nom,
        descriptionHabitat: selectedHabitat.descriptionHabitat,
        image_data: selectedHabitat.image_path,
      });
      setDroppedImage(
        `${process.env.REACT_APP_API}/${selectedHabitat.image_path}`
      );
    }
  }, [indexHabitat, habitats]);

  //Récupération de l'image
  useEffect(() => {
    setHabitat((prevData) => ({
      ...prevData,
      image_data: droppedImage,
    }));
  }, [droppedImage]);

  //Drag and Drop de la photo modifié de l'habitat.
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

  //Récuperation de l'habitat selectionné.
  const handleRadio = (e) => {
    setIndexHabitat(e.target.value);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //Envoie modif de l' habitat.
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateHabitat(habitat);
    dispatch(getHabitats());
    console.log("habitat = ", habitat);
    resetForm();
  };

  //Suppression d'un habitat
  const handleDeleteHabitat = async () => {
    await deleteHabitat(habitat);
    dispatch(getHabitats());
  };
  /*************************Nouvel habitat********************************************************** */
  const [droppedNewImage, setDroppedNewImage] = useState(null);
  //Création nouvel habitat.
  const [newHabitat, setNewHabitat] = useState({
    nom: "",
    descriptionHabitat: "",
    image_data: "",
  });

  //Remise à zéro du formulaire
  const resetNewForm = () => {
    setNewHabitat({
      nom: "",
      descriptionHabitat: "",
      image_data: "",
    });
    setDroppedNewImage(null);
  };

  //Récupération de l'image
  useEffect(() => {
    setNewHabitat((prevData) => ({
      ...prevData,
      image_data: droppedNewImage,
    }));
  }, [droppedNewImage]);

  //Récupération des infos du nouvel habitat.
  const handleNewInfo = (e) => {
    const { name, value } = e.target;
    setNewHabitat((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Drag and Drop de la photo du nouvel habitat.
  const handleNewDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setDroppedNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitNewHabitat = async (e) => {
    e.preventDefault();
    await postHabitat(newHabitat);
    dispatch(getHabitats());
    resetNewForm();
  };

  return (
    <>
      <div
        className="container-formulaire"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="header-formulaire">
          <span>MODIFIER UN HABITAT:</span>
        </div>
        <form onSubmit={handleSubmit} className="formulaire">
          <div className="container-radio">
            {!isEmpty(habitats) &&
              Array.isArray(habitats) &&
              habitats.map((habitat, index) => (
                <div className="bloc-radio" key={index}>
                  <label htmlFor={`radio${index}`} className="radio">
                    {habitat.nom}:
                  </label>
                  <input
                    type="radio"
                    id={`radio${index}`}
                    name="selectedHabitat"
                    value={index.toString()}
                    onChange={handleRadio}
                  />
                </div>
              ))}
          </div>

          <label htmlFor="nom" className="label-formulaire">
            Nom:
          </label>
          <input
            className="input-formulaire"
            type="text"
            name="nom"
            value={habitat.nom}
            onChange={handleInfo}
          />

          <label htmlFor="descriptionHabitat" className="label-formulaire">
            Description:
          </label>
          <textarea
            name="descriptionHabitat"
            id="descriptionHabitat"
            className="textArea-formulaire"
            maxLength="245"
            value={habitat.descriptionHabitat}
            onChange={handleInfo}
          ></textarea>

          <div className="glisser">
            <span>Photo:</span>

            <div className="deposer">
              <img
                src={droppedImage || habitat.image_data}
                alt="Dropped"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </div>

          <button className="button-formulaire" type="submit">
            MODIFIER
          </button>
          <button className="button-formulaire" onClick={handleDeleteHabitat}>
            SUPPRIMER
          </button>
        </form>
      </div>
      {/*************************************************************************************************************************** */}
      <div
        className="container-formulaire"
        onDrop={handleNewDrop}
        onDragOver={handleDragOver}
      >
        <div className="header-formulaire">
          <span>AJOUTER UN HABITAT:</span>
        </div>
        <div className="espace"></div>
        <form onSubmit={handleSubmitNewHabitat} className="formulaire">
          <label htmlFor="nom" className="label-formulaire">
            Ajouter un nom:
          </label>
          <input
            className="input-formulaire"
            type="text"
            name="nom"
            value={newHabitat.nom}
            onChange={handleNewInfo}
          />

          <label htmlFor="descriptionHabitat" className="label-formulaire">
            Ajouter une description:
          </label>
          <textarea
            name="descriptionHabitat"
            id="descriptionHabitat"
            className="textArea-formulaire"
            maxLength="245"
            value={newHabitat.descriptionHabitat}
            onChange={handleNewInfo}
          ></textarea>

          <div className="glisser">
            <span>Photo:</span>

            <div className="deposer">
              {droppedNewImage ? (
                <img
                  src={droppedNewImage}
                  alt="Dropped"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              ) : (
                <span> &#x2192;DEPOSER L'IMAGE ICI&#x2190; </span>
              )}
            </div>
          </div>

          <button className="button-formulaire" type="submit">
            AJOUTER
          </button>
        </form>
      </div>
    </>
  );
};

export default HabitatsAdmin;
