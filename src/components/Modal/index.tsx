import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Modal.module.css';
export function Modal() {
  const { level, showModal, closeModal } = useContext(ChallengesContext);

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          {showModal.every(bool => bool === true) ? (
            <div className={styles.levelUpModal}>
              <h4>Level Up {level}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          ) : (
            <div className={styles.finishModal}>
              <h4>Congratulations</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          )}
          <button type="button" onClick={closeModal}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
