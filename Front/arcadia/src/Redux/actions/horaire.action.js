import axios from "axios";

export const GET_HORAIRE = "GET_HORAIRE";

export const getHoraire = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_ARCADIA/horaire");
      dispatch({ type: GET_HORAIRE, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
