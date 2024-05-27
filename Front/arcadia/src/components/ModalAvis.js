import React, { useState } from "react";
import { postAvis } from "../Utils/AvisUtils";

const ModalAvis = ({ handleShowModale }) => {
  const [avis, setAvis] = useState({
    pseudo: "",
    commentaire: "",
    isValid: "0",
  });

  // Fonction pour fermer la modal lors du clic sur la croix
  const handleCloseModal = () => {
    handleShowModale();
  };

  //Récupération de l'avis et pseudo.
  const handleAvis = (e) => {
    const { name, value } = e.target;
    setAvis((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Envoie de l'avis.
  const submitAvis = (e) => {
    e.preventDefault();
    postAvis(avis);
  };

  return (
    <div className="container-modal">
      <div className="header-formulaire">
        <span className="title-avis">LAISSEZ VOTRE AVIS</span>
        <div className="croix" onClick={handleCloseModal}>
          &#215;
        </div>
      </div>
      <form onSubmit={submitAvis} className="formulaire">
        <label htmlFor="pseudo" className="label-formulaire">
          Pseudo:
        </label>
        <input
          type="text"
          name="pseudo"
          className="input-formulaire"
          id="pseudo"
          onChange={handleAvis}
        />

        <label htmlFor="avis" className="label-formulaire">
          Avis:
        </label>
        <textarea
          maxLength="150"
          name="commentaire"
          id="avis"
          className="textArea-formulaire"
          onChange={handleAvis}
        ></textarea>

        <button className="button-formulaire" type="submit">
          SOUMETTRE
        </button>
      </form>
    </div>
  );
};

export default ModalAvis;
