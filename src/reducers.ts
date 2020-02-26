import { CHANGE_INTERVAL } from "./actions";

// reducers
export const reducer = (state: number, action: ActionWithPayload) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      return action.payload ? (state += action.payload) : state;
    default:
      return {};
  }
};
