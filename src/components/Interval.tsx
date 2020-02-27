import IntervalComponent from "./IntervalComponent";
import { changeInterval } from "../actions";
import { connect } from "../vendors/react-slomux";

const Interval = connect(
  // Change arguments order
  state => ({
    currentInterval: state
  }),
  dispatch => ({
    changeInterval: (value: number) => dispatch(changeInterval(value))
  })
)(IntervalComponent);

export default Interval;
