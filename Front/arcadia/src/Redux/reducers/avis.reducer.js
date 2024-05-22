import { GET_AVIS } from "../actions/avis.action";

const initialState = {};

export default function avisReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AVIS:
      return action.payload;
    default:
      return state;
  }
}
