import React, { useState } from "react";
import { isEmpty } from "../Utils/Utils";
import { useSelector } from "react-redux";

const RapportAdmin = () => {
  const rapports = useSelector((state) => state.getRapport);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  //Trie par ordre alphabétique des colonnes rapport.
  const sortedRapports = React.useMemo(() => {
    if (!sortConfig.key || isEmpty(rapports)) return rapports;
    const sorted = [...rapports].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [rapports, sortConfig]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container-rapport">
      <div className="header-formulaire">
        <span>RAPPORT VETERINAIRE</span>
      </div>
      {isEmpty(sortedRapports) ? (
        <p>Aucun rapport disponible</p>
      ) : (
        <table className="tableau-admin">
          <thead>
            <tr>
              <th onClick={() => requestSort("rapport_id")}>Rapport_id</th>
              <th onClick={() => requestSort("date_rapport")}>Date</th>
              <th onClick={() => requestSort("prenom")}>Prénom</th>
              <th onClick={() => requestSort("label")}>Race</th>
              <th onClick={() => requestSort("etat")}>Etat</th>
              <th onClick={() => requestSort("detail_etat")}>Détail_etat</th>
              <th onClick={() => requestSort("nourriture")}>Nourriture</th>
              <th onClick={() => requestSort("grammage")}>Grammage</th>
            </tr>
          </thead>
          <tbody>
            {sortedRapports.map((rapport, index) => (
              <tr key={index}>
                <td>{rapport.rapport_id}</td>
                <td>{rapport.date_rapport}</td>
                <td>{rapport.prenom}</td>
                <td>{rapport.label}</td>
                <td>{rapport.etat}</td>
                <td>{rapport.detail_etat}</td>
                <td>{rapport.nrtconseille}</td>
                <td>{rapport.qtconseille}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RapportAdmin;
