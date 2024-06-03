import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_AVISISVALID = "GET_AVISISVALID";

export const getAvisIsValid = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/avisIsValid");
      dispatch({ type: GET_AVISISVALID, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
