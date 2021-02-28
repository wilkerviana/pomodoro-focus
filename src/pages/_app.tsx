import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pomodoro Focus</title>
        <meta name="title" content="Pomodoro Focus" />
        <meta
          name="description"
          content="Pomodoro Focus is an application based on pomodoro technique, with basic gamification. Developed during Rocketseat - Next Level Week, to reinforce learning about React.js and Next.js."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pomodoro-focus.vercel.app/" />
        <meta property="og:title" content="Pomodoro Focus" />
        <meta
          property="og:description"
          content="Pomodoro Focus is an application based on pomodoro technique, with basic gamification. Developed during Rocketseat - Next Level Week, to reinforce learning about React.js and Next.js."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pomodoro-focus.vercel.app/" />
        <meta property="twitter:title" content="Pomodoro Focus" />
        <meta
          property="twitter:description"
          content="Pomodoro Focus is an application based on pomodoro technique, with basic gamification. Developed during Rocketseat - Next Level Week, to reinforce learning about React.js and Next.js."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800&family=Oxygen:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
