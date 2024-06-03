import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_AVIS = "GET_AVIS";

export const getAvis = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/avis");
      dispatch({ type: GET_AVIS, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
