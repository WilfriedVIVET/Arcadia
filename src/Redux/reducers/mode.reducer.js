import { GET_MODE } from "../actions/mode.action";

const initialState = {};

export default function modeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MODE:
      return action.payload;
    default:
      return state;
  }
}
