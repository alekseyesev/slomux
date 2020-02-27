import React from "react";
import Interval from "./Interval";

class TimerComponent extends React.Component<
  TimerComponentProps,
  TimerComponentState
> {
  // Add static timerId to manage setTimeout
  static timerId: any;
  state = {
    currentTime: 0
  };

  render() {
    // Memoize instance in context of methods: handleStart and handleStop
    const handleStartWithContext = this.handleStart.bind(this);
    const handleStopWithContext = this.handleStop.bind(this);
    return (
      <div>
        <Interval />
        <div>Секундомер: {this.state.currentTime} сек.</div>
        <div>
          <button onClick={handleStartWithContext}>Старт</button>
          <button onClick={handleStopWithContext}>Стоп</button>
        </div>
      </div>
    );
  }

  handleStart() {
    TimerComponent.timerId = setTimeout(
      () =>
        this.setState(
          (state, props) => ({
            currentTime: state.currentTime + props.currentInterval
          }),
          this.handleStart
        ), // Add callback to get recursive setTimeout
      // Convert seconds to milliseconds
      this.props.currentInterval * 1000
    );
  }

  handleStop() {
    // Add clearTimeout
    clearTimeout(TimerComponent.timerId);
    this.setState({ currentTime: 0 });
  }
}

export default TimerComponent;
