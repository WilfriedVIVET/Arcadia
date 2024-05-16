import axios from "axios";

export const GET_INFOANIMAL = "GET_INFOANIMAL";

export const getInfoAnimal = (prenom) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost/API_ARCADIA/infoAnimal/${prenom}`
      );
      dispatch({ type: GET_INFOANIMAL, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
