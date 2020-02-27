import { createStore } from "./index";
import { changeInterval } from "../../actions";
import { reducer } from "../../reducers";

let store: {
  getState: () => number;
  dispatch: (action: ActionWithPayload) => void;
  subscribe: (listener: Function) => void;
};

describe("store", () => {
  it("should create an app store", () => {
    store = createStore(reducer);
    expect(store.getState).toBeDefined();
    expect(store.dispatch).toBeDefined();
    expect(store.subscribe).toBeDefined();
  });
  it("should contain an initial value", () => {
    expect(store.getState()).toBe(0);
  });
  it("should change the initial value", () => {
    store.dispatch(changeInterval(1));
    expect(store.getState()).toBe(1);
  });
  test("should call a subscriber function after the store has changed", done => {
    store.subscribe(() => {
      try {
        expect(store.getState()).toBe(2);
        done();
      } catch (error) {
        done(error);
      }
    });
    store.dispatch(changeInterval(1));
  });
});
