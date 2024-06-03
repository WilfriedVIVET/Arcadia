import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_ANIMAUX = "GET_ANIMAUX";

export const getAnimaux = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/animaux");
      dispatch({ type: GET_ANIMAUX, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
