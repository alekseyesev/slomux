import React from "react";
import { connect } from "./vendors/react-slomux/";
import TimerComponent from "./components/TimerComponent";

const Timer: React.ComponentClass = connect(
  state => ({
    currentInterval: state
  }),
  () => ({})
)(TimerComponent);

export default Timer;
