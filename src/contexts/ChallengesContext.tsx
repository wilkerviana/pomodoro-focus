import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Modal } from '../components/Modal';

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  showModal: boolean[];
  closeModal: () => void;
  levelUp: () => void;
  completeChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [showModal, setShowModal] = useState([false, false]);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const experienceUp = Math.pow((level + 1) * Number((Math.random() * (2 - 1) + 1).toFixed()), 2);

  let finalExperience = currentExperience + experienceUp;

  function levelUp() {
    setLevel(level + 1);
  }

  function closeModal() {
    setShowModal([false, false]);
  }

  function completeChallenge() {
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      setShowModal([true, true]);
      levelUp();
    } else {
      setShowModal([true, false]);
    }
    setCurrentExperience(finalExperience);
    setChallengesCompleted(challengesCompleted + 1);
  }

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        showModal,
        closeModal,
        levelUp,
        completeChallenge,
      }}
    >
      {children}
      {showModal.includes(true) && <Modal />}
    </ChallengesContext.Provider>
  );
}
