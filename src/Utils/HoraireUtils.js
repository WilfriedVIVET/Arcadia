import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

//Modification horaire.
export const postHoraire = async (newHoraire) => {
  try {
    const response = await axios.post(
      API + "/Post/postHoraire.php",
      JSON.stringify(newHoraire)
    );
    return response.data.message;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
