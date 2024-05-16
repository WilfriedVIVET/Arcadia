import { GET_INFOANIMAL } from "../actions/infoAnimal.action";

const initialState = {};

export default function InfoAnimalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INFOANIMAL:
      return action.payload;
    default:
      return state;
  }
}
