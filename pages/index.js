import Head from "next/head";
import Languages from "components/languages";
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
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          key={"one"}
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
          key={"two"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
          key={"three"}
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
        </style>
      </Head>

      <main className={styles.main + " container mx-auto"}>
        <Title />
        <Languages />
      </main>
    </div>
  );
}
