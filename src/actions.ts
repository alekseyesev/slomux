// actions
const CHANGE_INTERVAL: action = "CHANGE_INTERVAL";

// action creators
export const changeInterval = (value: number) => ({
  type: CHANGE_INTERVAL,
  payload: value
});
