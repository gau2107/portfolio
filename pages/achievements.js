import confetti from "canvas-confetti";
import Head from "next/head";
import { useEffect } from "react";

export default function Achievements() {
  const end = Date.now() + 3 * 1000;
  const colors = ["#bb0000", "#ffffff"];
  useEffect(() => {
    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
    };
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }, []);

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
