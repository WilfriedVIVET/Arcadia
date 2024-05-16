import React from "react";

const ModalAvis = ({ handleShowModale }) => {
  return (
    <div className="container-formulaire avis">
      <div className="header-formulaire">
        <span className="title-avis">LAISSEZ VOTRE AVIS</span>
        <div className="croix" onClick={handleShowModale}>
          &#215;
        </div>
      </div>
      <form action="" className="formulaire">
        <div className="formulaire-bloc">
          <label htmlFor="pseudo" className="label-formulaire">
            Pseudo:
          </label>
          <input
            type="text"
            name="pseudo"
            className="input-formulaire"
            id="pseudo"
          />
        </div>
        <div className="formulaire-bloc">
          <label htmlFor="avis" className="label-formulaire">
            Avis:
          </label>
          <textarea
            name="avis"
            id="avis"
            className="textArea-formulaire"
          ></textarea>
        </div>
        <button className="button-formulaire">SOUMETTRE</button>
      </form>
    </div>
  );
};

export default ModalAvis;
