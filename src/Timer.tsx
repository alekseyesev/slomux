import React from 'react';

const Timer = connect(state => ({
  currentInterval: state,
}), () => {})(TimerComponent)

export default Timer;
