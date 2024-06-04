import axios from "axios";

export const GET_SERVICES = "GET_SERVICES";

export const getServices = () => {
  console.log("api = ", process.env.REACT_APP_API);
  return async (dispatch) => {
    const url = process.env.REACT_APP_API;
    try {
      const res = await axios.get(url + "/services");
      dispatch({ type: GET_SERVICES, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
