/// <reference types="react-scripts" />

type action = "CHANGE_INTERVAL";

interface TimerComponentProps {
  currentInterval: number;
}

interface TimerComponentState {
  currentTime: number;
}

interface IntervalComponentProps extends TimerComponentProps {
  changeInterval: (number) => void;
}
