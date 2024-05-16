import React from "react";

const HoraireAdmin = () => {
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
            <th>Apres-midi</th>
          </tr>
        </thead>
        <tbody>
          {/*
          {data.map((element, index) => (
            <tr key={index}>
              <td>{element.colonne1}</td>
              <td>{element.colonne2}</td>
            </tr>
          ))}
          */}
        </tbody>
      </table>
      <button className="button-formulaire">Valider</button>
    </div>
  );
};

export default HoraireAdmin;
