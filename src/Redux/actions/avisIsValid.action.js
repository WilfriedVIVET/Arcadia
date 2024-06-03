import axios from "axios";

export const GET_AVISISVALID = "GET_AVISISVALID";

export const getAvisIsValid = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API + "/avisIsValid");
      dispatch({ type: GET_AVISISVALID, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
