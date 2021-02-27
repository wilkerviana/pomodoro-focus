import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Controls.module.css';

export function Controls() {
  const { isActive, startCountdown, resetCountdown } = useContext(CountdownContext);
  return (
    <div className={styles.buttonsContainer}>
      {isActive ? (
        <button type="button" className={styles.cancelButton} onClick={resetCountdown}></button>
      ) : (
        <button type="button" className={styles.playButton} onClick={startCountdown}></button>
      )}
    </div>
  );
}
