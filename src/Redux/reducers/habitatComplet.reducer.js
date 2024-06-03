import { GET_HABITATCOMPLET } from "../actions/habitatComplet.action";

const initialState = {};

export default function habitatCompletReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HABITATCOMPLET:
      return action.payload;
    default:
      return state;
  }
}
