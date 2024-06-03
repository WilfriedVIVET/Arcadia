import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_RACES = "GET_RACES";

export const getRaces = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/races");
      dispatch({ type: GET_RACES, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
