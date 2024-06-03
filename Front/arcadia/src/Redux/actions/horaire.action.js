import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_HORAIRE = "GET_HORAIRE";

export const getHoraire = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/horaire");
      dispatch({ type: GET_HORAIRE, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
