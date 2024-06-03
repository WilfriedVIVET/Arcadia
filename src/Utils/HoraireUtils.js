import axios from "axios";

//Modification horaire.
export const postHoraire = async (newHoraire) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Post/postHoraire.php",
      JSON.stringify(newHoraire)
    );
    return response.data.message;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
