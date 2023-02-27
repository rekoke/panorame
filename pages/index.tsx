import Head from "next/head";
import styles from "../styles/Home.module.css";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Examples from "../components/Examples";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import VirtualTours from "../components/VirtualTours";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Panorame</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Intro />
        <VirtualTours />
        <Examples />
        <Pricing />
      </main>
      <footer className={styles.footer}>
        <Contact />
        <Footer />
      </footer>
    </div>
  );
}
