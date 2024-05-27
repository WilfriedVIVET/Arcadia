import React, { useEffect, useState } from "react";
import { postHabitat, deleteHabitat } from "../Utils/HabitatUtils";
import { getHabitats } from "../Redux/actions/habitats.action";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";

const HabitatsAdmin = () => {
  const dispatch = useDispatch();
  const habitats = useSelector((state) => state.getHabitats);
  const [droppedImage, setDroppedImage] = useState(null);
  const [indexHabitat, setIndexHabitat] = useState("");

  const [newHabitat, setNewHabitat] = useState({
    habitat_id: "0",
    nom: "",
    descriptionHabitat: "",
    image_data: "",
  });

  //Récupération des infos de l'habitat.
  const handleInfo = (e) => {
    const { name, value } = e.target;
    setNewHabitat((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (indexHabitat !== "" && habitats[indexHabitat]) {
      setNewHabitat((prevData) => ({
        ...prevData,
        habitat_id: habitats[indexHabitat].habitat_id,
        nom: habitats[indexHabitat].nom,
        descriptionHabitat: habitats[indexHabitat].description,
        image_data: habitats[indexHabitat].image_data,
      }));
    }
  }, [indexHabitat, habitats]);

  useEffect(() => {
    setNewHabitat((prevData) => ({
      ...prevData,
      image_data: droppedImage,
    }));
  }, [droppedImage]);

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

  //Récuperation de l'habitat selectionné.
  const handleRadio = (e) => {
    setIndexHabitat(e.target.value);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //Envoie modif ou nouvel habitat.
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postHabitat(newHabitat);
    dispatch(getHabitats());
  };

  //Suppression d'un habitat
  const handleDeleteHabitat = async () => {
    await deleteHabitat(newHabitat);
    dispatch(getHabitats());
  };

  return (
    <div
      className="container-formulaire"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="header-formulaire">
        <span>HABITATS:</span>
      </div>
      <form onSubmit={handleSubmit} className="formulaire">
        <div className="container-radio">
          {!isEmpty(habitats) &&
            habitats.map((habitat, index) => (
              <div className="bloc-radio" key={index}>
                <label htmlFor={`radio${index}`} className="radio">
                  {habitat.nom}:
                </label>
                <input
                  type="radio"
                  id={`radio${index}`}
                  name="selectedHabitat"
                  value={index}
                  onClick={handleRadio}
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
          onChange={handleInfo}
          defaultValue={
            indexHabitat !== "" && habitats[indexHabitat]
              ? habitats[indexHabitat].nom
              : ""
          }
        />

        <label htmlFor="descriptionHabitat" className="label-formulaire">
          Description:
        </label>
        <textarea
          name="descriptionHabitat"
          id="descriptionHabitat"
          className="textArea-formulaire"
          maxLength="250"
          onChange={handleInfo}
          defaultValue={
            indexHabitat !== "" && habitats[indexHabitat]
              ? habitats[indexHabitat].description
              : ""
          }
        ></textarea>

        <div className="glisser">
          <span>Photo:</span>
          <div className="photo">
            <img
              src={
                indexHabitat !== "" && habitats[indexHabitat]
                  ? `data:image/jpg;base64,${habitats[indexHabitat].image_data}`
                  : ""
              }
              alt={
                indexHabitat !== "" && habitats[indexHabitat]
                  ? habitats[indexHabitat].nom
                  : ""
              }
            />
          </div>
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
        </div>

        <button className="button-formulaire" type="submit">
          VALIDER
        </button>
        <button className="button-formulaire" onClick={handleDeleteHabitat}>
          SUPPRIMER
        </button>
      </form>
    </div>
  );
};

export default HabitatsAdmin;
