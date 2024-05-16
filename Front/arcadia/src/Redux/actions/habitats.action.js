import axios from "axios";

export const GET_HABITATS = "GET_HABITATS";

export const getHabitats = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_ARCADIA/habitats");
      dispatch({ type: GET_HABITATS, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
