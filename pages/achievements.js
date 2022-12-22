import Head from "next/head";

export default function Achievements() {
  return (
    <div className={""}>
      <Head>
        <title>Gaurav Solanki | Achievements</title>
        <meta name="description" content="JS Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={""}>
        <div className="container mx-auto">
          <h1 className="text-5xl font-medium leading-tight mt-0 mb-2">
            Achievements
          </h1>
          <img
            className="mx-auto object-center pb-8"
            alt="Hacker rank "
            src="/assets/achievements/hackerrank.png"
          />

          <img
            className="mx-auto object-center pb-8"
            alt="Cutshort "
            src="/assets/achievements/cutshort.jpg"
          />
        </div>
      </main>
    </div>
  );
}
