import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Quotes.module.css';

export function Quotes() {
  const { quote } = useContext(CountdownContext);
  const [newQuote, setNewQuote] = useState(null);

  useEffect(() => {
    setNewQuote(null);
    setTimeout(() => {
      setNewQuote(quote);
    }, 100);
  }, [quote]);

  return (
    <>
      <div style={{ width: '420px' }}>
        {newQuote && (
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className={styles.quote}
            >
              {`"${newQuote.quote}"`}
              <span>{newQuote.author}</span>
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
