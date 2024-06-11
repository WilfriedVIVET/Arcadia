import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { postContact } from "../Utils/ContactUtils";

const Contact = () => {
  const [contact, setContact] = useState({
    titre: "",
    description: "",
    email: "",
  });

  const handleContact = (e) => {
    const { name, value } = e.target;
    setContact((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitContact = (e) => {
    e.preventDefault();
    const { email, titre, description } = contact;
    // Validation de l'email avec une expression régulière
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    // Échappement des données
    const encodedContact = {
      ...contact,
      titre: encodeURIComponent(titre),
      description: encodeURIComponent(description),
    };
    postContact(encodedContact);
  };

  return (
    <div className="body-container">
      <Navbar />
      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>CONTACTEZ-NOUS:</span>
        </div>
        <form onSubmit={submitContact} className="formulaire">
          <label htmlFor="titre" className="label-formulaire">
            Titre:
          </label>
          <input
            type="text"
            name="titre"
            className="input-formulaire"
            id="titre"
            onChange={handleContact}
          />

          <label htmlFor="description" className="label-formulaire">
            Description:
          </label>
          <textarea
            name="description"
            className="textArea-formulaire"
            rows={4}
            cols={35}
            id="description"
            maxLength="250"
            onChange={handleContact}
          />

          <label htmlFor="email" className="label-formulaire">
            Email:
          </label>
          <input
            type="text"
            name="email"
            className="input-formulaire"
            id="email"
            onChange={handleContact}
          />

          <button className="button-formulaire" type="submit">
            Envoyer
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
