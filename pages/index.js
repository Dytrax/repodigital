import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AwesomeSlider from "react-awesome-slider";
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.topContainer}>
       
        <div className={styles.topBar}>
          <div className={styles.logoContainer}>
            <img
              src={'/logo.png'}
              className={styles.logoImg}
            />
          </div>
          <div className={styles.socialContainer}>
          <img
              src={'/tuit.svg'}
              className={styles.mediaLogo}
            />
            <img
              src={'/instagram.svg'}
              className={styles.mediaLogo}
            />
            <img
              src={'/facebook.svg'}
              className={styles.mediaLogo}
            />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <text className={styles.titles}>Cantar y Contar</text>
{/*           <text className={styles.subtitles}>Un regalo con musica, magia y expresiones culturares que tus hijos nunca olvidaran</text>
 */}          <text className={styles.subtitles}>El espacio para que tus hijos aprendan arte, expresion corporal, a cantar y contar con proposito</text>

          <div className={styles.divRow}>
          <Button variant="warning">Obtener ahora</Button>{' '}
            <Button variant="info">Leer más</Button>{' '}
            <Button variant="danger">Donar</Button>

          </div>

        </div>
        
        <AwesomeSlider className={styles.sliderContainer}>
        {/* <div className={styles.backdrop}>
  <p className={styles.text}>Cantar y Contar</p>
</div>   */}
       <div data-src="montañas.png"></div>
        <div data-src="playa.png"></div>
        <div data-src="Palma.png"></div>
        <div data-src="Cerca finca.png"></div>


        </AwesomeSlider>
        </div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
