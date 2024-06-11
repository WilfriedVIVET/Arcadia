import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "../Utils/Utils";

const MONGO_URL = process.env.REACT_APP_MONGO_URL; //|| "http://localhost:3006/animals";

const Mongo = () => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get(MONGO_URL);

        setAnimals(response.data);
      } catch (error) {
        setError(error.message);
        console.log(error.message + " url " + MONGO_URL);
      }
    };

    fetchAnimals();
  }, []);

  const sortedAnimals = React.useMemo(() => {
    if (!sortConfig.key) {
      return animals;
    }
    const sortedArray = [...animals].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    return sortedArray;
  }, [animals, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container-formulaire">
      <div className="header-formulaire">
        <span>Consultation</span>
      </div>
      <table className="tableau-consultationgit">
        <thead>
          <tr>
            <th onClick={() => requestSort("prenom")}>PRENOM</th>
            <th onClick={() => requestSort("count")}>NB.CONSULT.</th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty(sortedAnimals) &&
            sortedAnimals.map((animal) => (
              <tr key={animal._id}>
                <td>{animal.prenom}</td>
                <td>{animal.count}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {error && <p>Payez un abonnement pour y avoir accès</p>}
    </div>
  );
};

export default Mongo;
