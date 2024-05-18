import axios from "axios";

export const GET_INFOANIMAL = "GET_INFOANIMAL";

export const getInfoAnimal = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost/API_ARCADIA/infoAnimal/`);
      dispatch({ type: GET_INFOANIMAL, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
