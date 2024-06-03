import axios from "axios";

export const GET_UTILISATEUR = "GET_UTILISATEUR";

export const getUtilisateur = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API + "/utilisateur");
      dispatch({ type: GET_UTILISATEUR, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
