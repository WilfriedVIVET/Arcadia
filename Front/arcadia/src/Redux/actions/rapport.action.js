import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_RAPPORT = "GET_RAPPORT";

export const getRapport = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/rapport");
      dispatch({ type: GET_RAPPORT, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
