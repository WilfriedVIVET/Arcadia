import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="body-container">
        <Navbar />
        <div className="container-formulaire">
          <div className="header-formulaire">
            <span>CONTACTEZ-NOUS:</span>
          </div>
          <form action="" className="formulaire">
            <div className="formulaire-bloc">
              <label htmlFor="titre" className="label-formulaire">
                Titre:
              </label>
              <input
                type="text"
                name="titre"
                className="input-formulaire"
                id="titre"
              />
            </div>
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
              <label htmlFor="description" className="label-formulaire">
                Description:
              </label>
              <textarea
                name="description"
                className="textArea-formulaire"
                rows={4}
                cols={35}
                id="description"
              />
            </div>
            <button className="button-formulaire">Envoyer</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
