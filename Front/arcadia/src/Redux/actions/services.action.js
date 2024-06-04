import axios from "axios";

export const GET_SERVICES = "GET_SERVICES";

export const getServices = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API + "/services");
      dispatch({ type: GET_SERVICES, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
