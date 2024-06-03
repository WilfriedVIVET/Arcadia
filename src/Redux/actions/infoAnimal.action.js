import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_INFOANIMAL = "GET_INFOANIMAL";

export const getInfoAnimal = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/infoAnimal");
      dispatch({ type: GET_INFOANIMAL, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
