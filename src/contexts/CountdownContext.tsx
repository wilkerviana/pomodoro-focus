import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { completeChallenge } = useContext(ChallengesContext);
  const defaultTime = 0.1 * 60;

  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    isActive && clearTimeout(countdownTimeout);
    setIsActive(!isActive);
  }

  function resetCountdown() {
    setIsActive(false);
    setTimeout(() => setTime(defaultTime), 0);
    clearTimeout(countdownTimeout);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      completeChallenge();
    }
  }, [isActive, time]);

  useEffect(() => !isActive && resetCountdown(), [isActive]);

  return (
    <CountdownContext.Provider
      value={{ minutes, seconds, isActive, startCountdown, resetCountdown }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
