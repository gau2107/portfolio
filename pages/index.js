import Head from "next/head";
import Languages from "components/languages";
import Title from "/components/title";
import styles from "/styles/Home.module.css";
import { NextSeo } from "next-seo";
export default function Home() {
  return (
    <div className={""}>
      <NextSeo
        title="Gaurav Solanki - Frontend Web Developer"
        description="Gaurav Solanki Portfolio Dashboard"
      />
      <Head>
        <title>Gaurav Solanki - Frontend Web Developer</title>
        <meta
          name="Gaurav Solanki - Frontend Web Developer"
          content="Gaurav Solanki - Frontend Web Developer Portfolio"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main + " container mx-auto"}>
        <Title />
        <Languages />
      </main>
    </div>
  );
}
