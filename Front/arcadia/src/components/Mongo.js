import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "../Utils/Utils";

const Mongo = () => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get("http://localhost:3008/animals");
        setAnimals(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAnimals();
  });

  return (
    <div className="container-formulaire">
      <div className="header-formulaire">
        <span>Consultation</span>
      </div>
      <table className="tableau-admin">
        <thead>
          <tr>
            <th>PRENOM</th>
            <th>NB.CONSULT.</th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty(animals) &&
            animals.map((animal) => (
              <tr key={animal._id}>
                <td>{animal.prenom}</td>
                <td>{animal.count}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Mongo;
