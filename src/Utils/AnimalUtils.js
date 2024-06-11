import axios from "axios";

//Création rapport.
export const postInfoRapport = async (newInfoAnimal) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Post/postInfoRapport.php",
      JSON.stringify(newInfoAnimal)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Ajout d'un nouvel animal
export const postAnimal = async (newAnimal) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Post/postAnimal.php",
      JSON.stringify(newAnimal)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Suppression d'une race
export const deleteRace = async (idRace) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Delete/deleteRace.php",
      JSON.stringify(idRace)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Ajout d'une nouvelle race
export const postNewRace = async (label) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Post/postRace.php",
      JSON.stringify(label)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Suppression d'un animal
export const deleteAnimal = async (id) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Delete/deleteAnimal.php",
      JSON.stringify(id)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
