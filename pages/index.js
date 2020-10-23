import Head from "next/head";
import styles from "../styles/Home.module.css";
import AwesomeSlider from "react-awesome-slider";
import { Button,InputGroup,FormControl } from "react-bootstrap";
import React, { Component } from "react";
import Link from 'next/link'
export default class Home extends Component {
  fetchNodeMailer = async () => {
    const url = 'http://localhost:3000/api/sendMail'
    const data = {
      senderMail:'carlos@gmail.com'
    }
    console.log('aqui')
    //const res = await fetch(,)
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const serverAnswer = await response.json()
    console.log(serverAnswer)
  
  }
  render() {
    return (
    <div className={styles.container}>
      <Head>
        <title>Cantar Contar</title>  
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.topContainer}>
          <div className={styles.topBar}>
            <div className={styles.logoContainer}>
              <img src={"/logo2.png"} className={styles.logoImg} />
              <Link href="/login">
              <Button variant="light">Ya tengo una cuenta</Button> 
              </Link>

            </div>
            <div className={styles.socialContainer}>
              <img src={"/tuit.svg"} className={styles.mediaLogo} />
              <img src={"/instagram.svg"} className={styles.mediaLogo} />
              <img src={"/facebook.svg"} className={styles.mediaLogo} />
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <text className={styles.titles}>Cantar y Contar</text>
                      <text className={styles.subtitles}>Un regalo con musica, magia y expresiones culturares que tus hijos nunca olvidaran</text>
            {" "}
            {/* <text className={styles.subtitles}>
              El espacio para que tus hijos aprendan arte, expresion corporal, a
              cantar y contar con proposito
            </text> */}
            <div className={styles.divRow}>
            
              <Button href="#obtenerAhora"  variant="warning">Obtener ahora</Button>{" "}
          
              <Button href="#conocerMas" variant="info" //onClick={()=>{this.fetchNodeMailer()}}
              >Conocer más</Button>{" "}
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
        <div id="obtenerAhora" className={styles.obtainNowContainer}>
          
        </div>
        <div id="conocerMas" className={styles.knowMoreContainer}>
          
        </div>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
}
