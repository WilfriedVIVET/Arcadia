import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_HABITATCOMPLET = "GET_HABITATCOMPLET";

export const getHabitatComplet = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/habitatComplet");
      dispatch({ type: GET_HABITATCOMPLET, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
