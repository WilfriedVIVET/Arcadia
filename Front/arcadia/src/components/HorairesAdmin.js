import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { postHoraire } from "../Utils/HoraireUtils";

const HoraireAdmin = () => {
  const horaires = useSelector((state) => state.getHoraire);
  const [newHoraire, setNewHoraire] = useState([]);

  const handleHoraire = (index, e) => {
    const { name, value } = e.target;
    setNewHoraire((prevData) => [
      ...prevData,
      { index: index, moment: name, heure: value },
    ]);
  };

  const submitHoraire = () => {
    console.log("newHoraire = ", JSON.stringify(newHoraire));
    postHoraire(newHoraire);
  };

  return (
    <div className="container-formulaire">
      <div className="header-formulaire">
        <span>HORAIRES:</span>
      </div>
      <table className="tableau">
        <thead>
          <tr>
            <th>Jour</th>
            <th>Matin</th>
            <th>Soir</th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty(horaires) &&
            horaires.map((horaire, index) => (
              <tr key={index}>
                <td className="jour-horaire">{horaire.jour}</td>
                <td>
                  <input
                    type="text"
                    defaultValue={horaire.debut}
                    onBlur={(e) => handleHoraire(index, e)}
                    name="debut"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    defaultValue={horaire.fin}
                    onBlur={(e) => handleHoraire(index, e)}
                    name="fin"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button className="button-formulaire" onClick={submitHoraire}>
        Valider
      </button>
    </div>
  );
};

export default HoraireAdmin;
