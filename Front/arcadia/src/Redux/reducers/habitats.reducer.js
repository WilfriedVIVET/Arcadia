import { GET_HABITATS } from "../actions/habitats.action";

const initialState = {};

export default function habitatsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HABITATS:
      return action.payload;
    default:
      return state;
  }
}
