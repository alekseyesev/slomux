import React from 'react';
import TimerComponent from './components/TimerComponent';

const Timer = connect(state => ({
  currentInterval: state,
}), () => {})(TimerComponent)

export default Timer;
