import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";
import Provider from "./vendors/react-slomux/provider";
import { createStore } from "./vendors/slomux";
import { reducer } from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Timer />
  </Provider>,
  document.getElementById("app")
);
