import React from "react";
import Navbar from "../components/Navbar";

const CreationCompte = () => {
  return (
    <div className="body-container">
      <Navbar />
      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>CREER UN COMPTE</span>
        </div>
        <form action="" className="formulaire">
          <div className="formulaire-radio">
            <label htmlFor="radio-employe" className="label-radio-formulaire">
              Employé
            </label>
            <input
              type="radio"
              id="radio-employe"
              name="type-compte"
              className="input-formulaire"
            />
            <label
              htmlFor="radio-veterinaire"
              className="label-radio-formulaire"
            >
              Vétérinaire
            </label>
            <input
              type="radio"
              id="radio-veterinaire"
              name="type-compte"
              className="input-formulaire"
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
            />
          </div>
          <button className="button-formulaire">CREER</button>
        </form>
      </div>
    </div>
  );
};

export default CreationCompte;
