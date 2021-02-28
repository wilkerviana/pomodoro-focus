import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Controls.module.css';

export function Controls() {
  const { isActive, startCountdown, resetCountdown } = useContext(CountdownContext);
  return (
    <div className={styles.buttonsContainer}>
      <AnimatePresence>
        {isActive ? (
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.8 },
            }}
            type="button"
            className={styles.cancelButton}
            onClick={resetCountdown}
          ></motion.button>
        ) : (
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.8 },
            }}
            type="button"
            className={styles.playButton}
            onClick={startCountdown}
          ></motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
