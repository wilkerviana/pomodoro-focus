import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/ProgressBar.module.css';

export function ProgressBar() {
  const { level, currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentBar = Math.round(currentExperience * 100) / experienceToNextLevel;
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.badge}>
        <span>Level {level}</span>
      </div>
      <div className={styles.container}>
        <span className={styles.bar}>
          <span style={{ width: `${percentBar}%` }}></span>
        </span>
        {currentExperience > 0 && (
          <span style={{ left: `${percentBar - 2}%` }}>{`${currentExperience}xp`}</span>
        )}
      </div>
      <div className={styles.experience}>
        <span>0xp</span>
        <span>{`${experienceToNextLevel}xp`}</span>
      </div>
    </div>
  );
}
