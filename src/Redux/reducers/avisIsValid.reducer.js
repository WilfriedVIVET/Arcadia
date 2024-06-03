import { GET_AVISISVALID } from "../actions/avisIsValid.action";

const initialState = {};

export default function avisIsValidReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AVISISVALID:
      return action.payload;
    default:
      return state;
  }
}
