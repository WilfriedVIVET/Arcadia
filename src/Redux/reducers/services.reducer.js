import { GET_SERVICES } from "../actions/services.action";

const initialState = {};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return action.payload;
    default:
      return state;
  }
}
