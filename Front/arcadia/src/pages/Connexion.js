import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Connexion = () => {
  return (
    <>
      <div className="body-container">
        <Navbar />
        <div className="container-formulaire">
          <div className="header-formulaire">
            <span>CONNECTEZ-VOUS:</span>
          </div>
          <form action="" className="formulaire">
            <div className="formulaire-bloc">
              <label htmlFor="mail" className="label-formulaire">
                Email:
              </label>
              <input
                type="text"
                name="mail"
                className="input-formulaire"
                id="mail"
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

            <button className="button-formulaire">Connexion</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Connexion;
