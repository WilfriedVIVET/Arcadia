import { ADD_ALERT, REMOVE_ALERT } from "../actions/alert.action";

const initialState = [];

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
}
