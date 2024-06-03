import { GET_UTILISATEUR } from "../actions/utilisateur.action";

const initialState = {};

export default function utilisateurReducer(state = initialState, action) {
  switch (action.type) {
    case GET_UTILISATEUR:
      return action.payload;
    default:
      return state;
  }
}
