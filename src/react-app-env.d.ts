/// <reference types="react-scripts" />

interface TimerComponentProps {
  currentInterval: number;
}

interface TimerComponentState {
  currentTime: number;
}

interface IntervalComponentProps extends TimerComponentProps {
  changeInterval: (number) => void;
}
