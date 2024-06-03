import axios from "axios";

export const GET_AVIS = "GET_AVIS";

export const getAvis = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API + "/avis");
      dispatch({ type: GET_AVIS, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
