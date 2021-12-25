import Head from "next/head"
import Image from "next/image"
import Footer from "../components/footer"
import Header from "../components/header"
import Projects from "../components/projects";


export default function Certificates() {
  return (
    <div className={""}>
      <Head>
        <title>Gaurav Solanki</title>
        <meta name="description" content="JS Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <br></br>
      <main className={"text-center"}>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
