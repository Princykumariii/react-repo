import { useState, useEffect } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let intervalRef = null;


  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  
  const stopTimer = () => {
    setIsRunning(false);
  };

  
  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef);
    }
    return () => clearInterval(intervalRef);
  }, [isRunning]);

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
};

export default useTimer;
