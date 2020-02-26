import IntervalComponent from './components/IntervalComponent';

const Interval = connect(
  dispatch => ({
    changeInterval: value => dispatch(changeInterval(value))
  }),
  state => ({
    currentInterval: state
  })
)(IntervalComponent);

export default Interval;
