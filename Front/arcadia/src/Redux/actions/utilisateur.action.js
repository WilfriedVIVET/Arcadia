import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_UTILISATEUR = "GET_UTILISATEUR";

export const getUtilisateur = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/utilisateur");
      dispatch({ type: GET_UTILISATEUR, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
