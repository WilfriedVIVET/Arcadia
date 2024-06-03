import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

export const GET_HABITATS = "GET_HABITATS";

export const getHabitats = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API + "/habitats");
      dispatch({ type: GET_HABITATS, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
