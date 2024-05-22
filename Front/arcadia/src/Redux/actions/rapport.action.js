import axios from "axios";

export const GET_RAPPORT = "GET_RAPPORT";

export const getRapport = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_ARCADIA/rapport");
      dispatch({ type: GET_RAPPORT, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
