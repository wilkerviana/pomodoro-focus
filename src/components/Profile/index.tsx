import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Profile.module.css';

export function Profile() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePicture}>
        <img src="https://miro.medium.com/max/360/0*1SkS3mSorArvY9kS.jpg" alt="Profile Picture" />
      </div>
      <div className={styles.profileInfo}>
        <h3>Steve Jobs</h3>
        <p>Completed Challenges {challengesCompleted}</p>
      </div>
    </div>
  );
}
