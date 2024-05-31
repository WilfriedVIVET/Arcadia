import axios from "axios";

// Post d'un avis.
export const postAvis = async (avis) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/Post/postAvis.php",
      JSON.stringify(avis)
    );

    return response.data.message;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Supprimer un avis.
export const deleteAvis = async (avis) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/Delete/deleteAvis.php",
      JSON.stringify(avis)
    );
    return response.data.message;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

//Validation des avis par l'employe.
export const postValidAvis = async (avis) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/Post/postValidAvis.php",
      JSON.stringify(avis)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
