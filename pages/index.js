import Head from "next/head";
import Image from "next/image";
import Cards from "../components/cards";
import Footer from "../components/footer";
import Header from "../components/header";
import Title from "../components/title";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gaurav Solanki</title>
        <meta name="description" content="JS Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Title />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}
