import { GET_RACES } from "../actions/races.action";

const initialState = {};

export default function racesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RACES:
      return action.payload;
    default:
      return state;
  }
}
