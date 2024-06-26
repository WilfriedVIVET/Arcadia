import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { deleteAvis, postValidAvis } from "../Utils/AvisUtils";
import { getAvis } from "../Redux/actions/avis.action";

const Avis = () => {
  const dispatch = useDispatch();
  const avis = useSelector((state) => state.getAvis);
  const [avisCheckboxState, setAvisCheckboxState] = useState({});

  // Chargement initial des avis
  useEffect(() => {
    dispatch(getAvis());
  }, [dispatch]);

  // Mise à jour de l'état des cases à cocher
  const handleCheckboxChange = (avisId) => {
    setAvisCheckboxState((prevState) => ({
      ...prevState,
      [avisId]: !prevState[avisId],
    }));
  };

  // Bouton valider
  const validationAvis = async () => {
    const validatedAvis = Object.keys(avisCheckboxState).map((avisId) => ({
      avis_id: avisId,
      isValid: avisCheckboxState[avisId] ? "1" : "0",
    }));
    await postValidAvis(validatedAvis);
  };

  // Bouton supprimer
  const supprimeAvis = async (avisId) => {
    await deleteAvis({ avis_id: avisId });
    dispatch(getAvis());
  };

  //Envoie du formulaire.
  const handleSubmit = (e) => {
    e.preventDefault();
    validationAvis();
  };

  return (
    <div className="container-formulaire">
      <div className="header-formulaire">
        <span>Avis</span>
      </div>
      <form onSubmit={handleSubmit} className="formulaire">
        {!isEmpty(avis) &&
          avis.map((avisUser) => (
            <div className="avis-employe" key={avisUser.avis_id}>
              <span>{avisUser.pseudo}</span>
              <p>{avisUser.commentaire}</p>

              <div className="bloc-info-bouton">
                <label
                  htmlFor={`checkbox-${avisUser.avis_id}`}
                  className="label-formulaire"
                >
                  Visible:
                </label>
                <input
                  type="checkbox"
                  id={`checkbox-${avisUser.avis_id}`}
                  checked={
                    avisCheckboxState.hasOwnProperty(avisUser.avis_id)
                      ? avisCheckboxState[avisUser.avis_id]
                      : avisUser.isValid
                  }
                  onChange={() => handleCheckboxChange(avisUser.avis_id)}
                />

                <button
                  type="button"
                  className="button-formulaire"
                  onClick={() => supprimeAvis(avisUser.avis_id)}
                >
                  Supprimer
                </button>
              </div>
              <div className="trait"></div>
            </div>
          ))}
        <button type="submit" className="button-formulaire">
          Valider
        </button>
      </form>
    </div>
  );
};

export default Avis;
