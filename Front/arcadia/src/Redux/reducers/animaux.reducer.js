import { GET_ANIMAUX } from "../actions/animaux.action";

const initialState = {};

export default function animauxReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANIMAUX:
      return action.payload;
    default:
      return state;
  }
}
