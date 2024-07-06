import axios from "axios";

//Modification etat habitat.
export const postEtatHabitat = async (newEtat) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Post/postEtat.php",
      JSON.stringify(newEtat)
    );
    alert(JSON.stringify(response.data));
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Ajout d'un nouvel habitat.
export const postHabitat = async (newHabitat) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Post/postHabitat.php",
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
      process.env.REACT_APP_API + "/Delete/deleteHabitat.php",
      JSON.stringify(habitat)
    );
    alert(JSON.stringify(response.data));
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Modification d'un habitat.
export const updateHabitat = async (habitat) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Update/updateHabitat.php",
      JSON.stringify(habitat)
    );
    alert(JSON.stringify(response.data));
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
