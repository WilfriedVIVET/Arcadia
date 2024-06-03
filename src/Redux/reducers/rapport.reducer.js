import { GET_RAPPORT } from "../actions/rapport.action";

const initialState = {};

export default function rapportReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RAPPORT:
      return action.payload;
    default:
      return state;
  }
}
