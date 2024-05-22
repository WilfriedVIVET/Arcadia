import axios from "axios";

//Post d un avis.
export const postAvis = async (avis) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/postAvis.php",
      JSON.stringify(avis)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Supprimer un avis.
export const deleteAvis = async (avis) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/deleteAvis.php",
      JSON.stringify(avis)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Validation des avis par l'employe.
export const postValidAvis = async (avis) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/postValidAvis.php",
      JSON.stringify(avis)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
