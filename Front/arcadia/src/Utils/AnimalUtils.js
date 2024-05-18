import axios from "axios";

//Modification fiche animal.
export const postInfoAnimal = async (newInfoAnimal) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/postInfoAnimal.php",
      JSON.stringify(newInfoAnimal)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
