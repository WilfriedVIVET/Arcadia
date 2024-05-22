import axios from "axios";

//Modification etat habitat.
export const postEtatHabitat = async (newEtat) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/postEtat.php",
      JSON.stringify(newEtat)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Ajout d'un nouvel habitat.
export const postHabitat = async (newHabitat) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/postHabitat.php",
      JSON.stringify(newHabitat)
    );
    alert(JSON.stringify(response.data));
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Suppression d'un habitat.
export const deleteHabitat = async (habitat) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/deleteHabitat.php",
      JSON.stringify(habitat)
    );
    alert(JSON.stringify(response.data));
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
