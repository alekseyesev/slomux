import { CHANGE_INTERVAL } from "./actions";

// reducers
export const reducer = (
  state: number = 0 /* Add default value */,
  action: ActionWithPayload
): number => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      // Add validation
      return typeof action.payload === "undefined" ||
        (state === 0 && action.payload < 0)
        ? state
        : (state += action.payload);
    default:
      // Replace empty object literal to state ({} -> state)
      return state;
  }
};
