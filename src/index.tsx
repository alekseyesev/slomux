import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Timer />
  </Provider>,
  document.getElementById("app")
);
