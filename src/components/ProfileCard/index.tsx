import { Profile } from '../Profile';
import styles from '../../styles/components/ProfileCard.module.css';
import { ProgressBar } from '../ProgressBar';

export function ProfileCard() {
  return (
    <footer className={styles.profileCardContainer}>
      <Profile />
      <ProgressBar />
    </footer>
  );
}
