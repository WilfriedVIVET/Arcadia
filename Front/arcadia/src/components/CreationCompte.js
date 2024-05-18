import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { postNewCompte } from "../Utils/CompteUtils";

const CreationCompte = () => {
  const [account, setAccount] = useState({
    role: "2",
    email: "",
    prenom: "",
    nom: "",
    password: "",
  });

  const handleUserChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setAccount((prevFormulaire) => ({
        ...prevFormulaire,
        role: e.target.id,
      }));
    } else {
      setAccount((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const resetForm = (e) => {
    const form = e.target;
    form.reset();
    setAccount({
      role: "2",
      email: "",
      prenom: "",
      nom: "",
      password: "",
    });
  };

  const submitAccount = (e) => {
    e.preventDefault();
    postNewCompte(account);
    resetForm(e);
  };

  return (
    <div className="body-container">
      <Navbar />
      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>CREER UN COMPTE</span>
        </div>
        <form onSubmit={submitAccount} className="formulaire">
          <div className="formulaire-radio">
            <label htmlFor="2" className="label-radio-formulaire">
              Employé
            </label>
            <input
              type="radio"
              id="2"
              name="compte"
              className="input-formulaire"
              onClick={handleUserChange}
              defaultChecked
            />
            <label htmlFor="3" className="label-radio-formulaire">
              Vétérinaire
            </label>
            <input
              type="radio"
              id="3"
              name="compte"
              className="input-formulaire"
              onClick={handleUserChange}
            />
          </div>
          <div className="formulaire-bloc">
            <label htmlFor="email" className="label-formulaire">
              Email:
            </label>
            <input
              type="text"
              name="email"
              className="input-formulaire"
              id="email"
              onChange={handleUserChange}
              required
            />
          </div>
          <div className="formulaire-bloc">
            <label htmlFor="prenom" className="label-formulaire">
              Prénom:
            </label>
            <input
              type="text"
              name="prenom"
              className="input-formulaire"
              id="prenom"
              onChange={handleUserChange}
              required
            />
          </div>
          <div className="formulaire-bloc">
            <label htmlFor="password" className="label-formulaire">
              Nom:
            </label>
            <input
              type="text"
              name="nom"
              className="input-formulaire"
              id="nom"
              onChange={handleUserChange}
              required
            />
          </div>
          <div className="formulaire-bloc">
            <label htmlFor="password" className="label-formulaire">
              Mot de passe:
            </label>
            <input
              type="text"
              name="password"
              className="input-formulaire"
              id="password"
              onChange={handleUserChange}
              required
            />
          </div>
          <button className="button-formulaire" type="submit">
            CREER
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreationCompte;
