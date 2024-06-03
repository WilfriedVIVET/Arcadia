import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

//Modification etat habitat.
export const postEtatHabitat = async (newEtat) => {
  try {
    const response = await axios.post(
      API + "/Post/postEtat.php",
      JSON.stringify(newEtat)
    );
    return response.data.message;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Ajout d'un nouvel habitat.
export const postHabitat = async (newHabitat) => {
  try {
    const response = await axios.post(
      API + "/Post/postHabitat.php",
      JSON.stringify(newHabitat)
    );
    return response.data.message;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Suppression d'un habitat.
export const deleteHabitat = async (habitat) => {
  try {
    const response = await axios.post(
      API + "/Delete/deleteHabitat.php",
      JSON.stringify(habitat)
    );
    alert(JSON.stringify(response.data));
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
