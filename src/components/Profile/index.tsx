import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Profile.module.css';

export function Profile() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePicture}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Steve_Wozniak_by_Gage_Skidmore_3_%28cropped%29.jpg"
          alt="Profile Picture"
        />
      </div>
      <div className={styles.profileInfo}>
        <h3>Steve Wozniak</h3>
        <p>Completed Challenges {challengesCompleted}</p>
      </div>
    </div>
  );
}
