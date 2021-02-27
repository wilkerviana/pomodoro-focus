import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css';

export function Countdown() {
  const { minutes, seconds } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.display}>
        <span className={styles.number}>{`${minuteLeft}${minuteRight}`}</span>
        <span className={styles.word}>minutes</span>
      </div>
      <div className={styles.display}>
        <span className={styles.word}>seconds</span>
        <span className={styles.number}>{`${secondLeft}${secondRight}`}</span>
      </div>
    </div>
  );
}
