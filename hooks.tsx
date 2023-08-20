import { useState, useEffect } from "react";
export const useTimer = (intervalTime = 1000, initialSeconds = 0) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [shouldStop, setShouldStop] = useState<boolean>(false);
  const [shouldRestart, setShouldRestart] = useState<boolean>(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [isRunning, intervalTime]);

  useEffect(() => {
    if (shouldStop) {
      setIsRunning(false);
      setShouldStop(false);
    }
  }, [shouldStop]);

  useEffect(() => {
    if (shouldRestart) {
      setIsRunning(true);
      setSeconds(0);
      setShouldRestart(false);
    }
  }, [shouldRestart]);

  return {
    seconds,
    start: () => setIsRunning(true),
    stop: () => setShouldStop(true),
    restart: () => setShouldRestart(true),
  };
};
