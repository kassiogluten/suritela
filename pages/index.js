import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SuriTela | Em manutenção</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <h1>Em manutenção</h1>
        <p>
          <a href="https://wa.me/5533999180022">Contato: (33) 99918-0022</a>
        </p>
        <img src="logo-suritela-512.png" alt="SuriTela" />
      </div>
    </div>
  );
}
