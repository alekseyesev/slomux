export const createStore = (
  reducer: (state: number, action: ActionWithPayload) => number,
  initialState: number = 0 /* Add default value */
) => {
  let currentState = initialState;
  const listeners: Array<Function> = [];

  const getState = () => currentState;
  const dispatch = (action: ActionWithPayload) => {
    currentState = reducer(currentState, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener: Function) => listeners.push(listener);

  return { getState, dispatch, subscribe };
};
