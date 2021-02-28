import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';
import quotes from '../../quotes.json';

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  quote: any;
  startCountdown: () => void;
  resetCountdown: () => void;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { completeChallenge } = useContext(ChallengesContext);
  const defaultTime = 5 * 60;

  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);

  const randomQuote = Math.floor(Math.random() * quotes.length);

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
      if (time % 30 === 0) {
        setQuote(quotes[randomQuote]);
      }
    } else if (isActive && time === 0) {
      setIsActive(false);
      completeChallenge();
    }
  }, [isActive, time]);

  useEffect(() => !isActive && resetCountdown(), [isActive]);

  return (
    <CountdownContext.Provider
      value={{ minutes, seconds, isActive, quote, startCountdown, resetCountdown }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
