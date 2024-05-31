import React, { useState } from "react";
import { postAvis } from "../Utils/AvisUtils";
import Alert from "../components/Alert";

const ModalAvis = ({ handleShowModale }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [avis, setAvis] = useState({
    pseudo: "",
    commentaire: "",
    isValid: "0",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModal = () => {
    handleShowModale();
  };

  const handleAvis = (e) => {
    const { name, value } = e.target;
    setAvis((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  //Validation du formulaire.
  const validateForm = () => {
    const newErrors = {};
    if (!avis.pseudo.trim()) newErrors.pseudo = "Le pseudo est requis.";
    if (!avis.commentaire.trim())
      newErrors.commentaire = "Le commentaire est requis.";
    return newErrors;
  };

  //Envoie de l'avis.
  const submitAvis = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsLoading(true);
    try {
      const response = await postAvis(avis);
      setMessage(response);
      setShowAlert(true);
      setAvis({ pseudo: "", commentaire: "", isValid: "0" });
    } catch (error) {
      setMessage(error.message);
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
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
          value={avis.pseudo}
          onChange={handleAvis}
        />
        {errors.pseudo && <span>{errors.pseudo}</span>}

        <label htmlFor="avis" className="label-formulaire">
          Avis:
        </label>
        <textarea
          maxLength="150"
          name="commentaire"
          id="avis"
          className="textArea-formulaire"
          value={avis.commentaire}
          onChange={handleAvis}
        ></textarea>
        {errors.commentaire && <span>{errors.commentaire}</span>}

        <button
          className="button-formulaire"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "ENVOI..." : "SOUMETTRE"}
        </button>
      </form>
      {showAlert && <Alert message={message} color={"success"} />}
    </div>
  );
};

export default ModalAvis;
