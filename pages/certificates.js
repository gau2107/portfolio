import Head from "next/head"
import Image from "next/image"
import Footer from "../components/footer"
import Header from "../components/header"


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
        <img className="mx-auto object-center" alt="next-js udemy certificate 70 hours" src="/assets/certificates/UC-836671ab-5041-45c7-870d-157798380c79.jpg"/>
        <img className="mx-auto object-center"  alt="react-js udemy certificate 1 hour" src="/assets/certificates/UC-14afcf4d-1373-409a-a818-ac9c6a3f91db.jpg"/>
      </main>
      <Footer />
    </div>
  );
}
