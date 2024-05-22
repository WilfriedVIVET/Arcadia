import axios from "axios";

export const GET_RACES = "GET_RACES";

export const getRaces = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_ARCADIA/races");
      dispatch({ type: GET_RACES, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
