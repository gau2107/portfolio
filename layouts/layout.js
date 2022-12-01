import Footer from "components/footer";
import Header from "components/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <div className="clear"></div>
      <Footer />
    </>
  );
}
