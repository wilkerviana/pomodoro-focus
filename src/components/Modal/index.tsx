import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Modal.module.css';
export function Modal() {
  const { level, showModal, closeModal } = useContext(ChallengesContext);

  return (
    <>
      <div className={styles.overlay}>
        <div
          className={`${styles.modal} ${
            showModal.every(bool => bool === true) ? styles.level : styles.finish
          }`}
        >
          {showModal.every(bool => bool === true) ? (
            <>
              <h4>Level Up</h4>
              <p>
                Kudhos!
                <br />
                You have been focused and nothing will stop your growthing!
              </p>
            </>
          ) : (
            <>
              <h4>Congratulations</h4>
              <p>
                You accomplished your goal as planned.
                <br />
                Keep focusing on your activities.
              </p>
            </>
          )}
          <button type="button" onClick={closeModal}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
