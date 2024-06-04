import axios from "axios";

export const GET_ANIMAUX = "GET_ANIMAUX";

export const getAnimaux = () => {
  return async (dispatch) => {
    try {
      const apiurl = process.env.REACT_APP_API + "/animaux";
      const res = await axios.get(apiurl);
      dispatch({ type: GET_ANIMAUX, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
