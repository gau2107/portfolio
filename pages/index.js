import Head from "next/head";
import Image from "next/image";
import Languages from "../components/languages";
import Footer from "../components/footer";
import Header from "../components/header";
import Title from "../components/title";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Gaurav Solanki</title>
        <meta name="description" content="JS Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main + " container mx-auto"}>
        <Title />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}
