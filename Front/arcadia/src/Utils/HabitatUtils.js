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
