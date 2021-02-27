import { GetServerSideProps } from 'next';
import { Controls } from '../components/Controls';
import { Countdown } from '../components/Countdown';
import { ProfileCard } from '../components/ProfileCard';
import { Quotes } from '../components/Quotes';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({ level, currentExperience, challengesCompleted }: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <CountdownProvider>
            <div className={styles.application}>
              <div className={styles.timer}>
                <img src="/assets/icons/brand_icon.svg" alt="Icon Focus" />
                <Countdown />
              </div>
              <div className={styles.quotes}>
                <Quotes />
                <Controls />
              </div>
            </div>
          </CountdownProvider>
          <ProfileCard />
        </div>
      </section>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
