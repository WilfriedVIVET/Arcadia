export const ADD_ALERT = "ADD_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export const addAlert = (message, type) => ({
  type: ADD_ALERT,
  payload: { message, type },
});

export const removeAlert = (index) => ({
  type: REMOVE_ALERT,
  payload: index,
});
