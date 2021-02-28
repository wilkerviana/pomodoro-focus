import styles from '../../styles/components/Modal.module.css';
import { AnimatePresence, motion } from 'framer-motion';
export function Modal({ showModal, closeModal }) {
  return (
    <>
      {showModal.includes(true) && (
        <AnimatePresence>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.overlay}
          >
            <motion.div
              animate={{ y: 25, opacity: 1, scale: 1 }}
              initial={{ y: -50, opacity: 0, scale: 0 }}
              exit={{ y: 0, opacity: 0, scale: 0 }}
              transition={{ duration: 1 }}
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
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.8 },
                }}
                type="button"
                onClick={closeModal}
              >
                Continue
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
