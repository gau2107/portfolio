import Head from "next/head";
import Image from "next/image";
import Languages from "components/languages";
import Footer from "/components/footer";
import Header from "/components/header";
import Title from "/components/title";
import styles from "/styles/Home.module.css";
import { NextSeo } from "next-seo";
export default function Home() {
  return (
    <div className={""}>
      <NextSeo
        title="Gaurav Solanki - Dashboard"
        description="Gaurav Solanki Portfolio Dashboard"
      />
      <Head>
        <title>Gaurav Solanki</title>
        <meta name="Gaurav Solanki" content="Gaurav Solanki Portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
