import { GET_HORAIRE } from "../actions/horaire.action";

const initialState = {};

export default function horaireReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HORAIRE:
      return action.payload;
    default:
      return state;
  }
}
