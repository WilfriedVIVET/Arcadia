import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_SERVICES = "GET_SERVICES";

export const getServices = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/services");
      dispatch({ type: GET_SERVICES, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
