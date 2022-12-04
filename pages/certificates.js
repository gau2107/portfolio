import Head from "next/head";

export default function Certificates() {
  return (
    <div className={""}>
      <Head>
        <title>Gaurav Solanki | Certificates</title>
        <meta name="description" content="JS Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={""}>
        <div className="container mx-auto">
          <h1 className="text-5xl font-medium leading-tight mt-0 mb-2">
            Certificates
          </h1>
          <img
            className="mx-auto object-center"
            alt="next-js udemy certificate 70 hours"
            src="/assets/certificates/UC-836671ab-5041-45c7-870d-157798380c79.jpg"
            
          />
          <img
            className="mx-auto object-center"
            alt="react-js udemy certificate 1 hour"
            src="/assets/certificates/UC-14afcf4d-1373-409a-a818-ac9c6a3f91db.jpg"
          />
        </div>
      </main>
      
    </div>
  );
}
