import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const RootLayout = ({ children }) => {
  return (
    <html>
      <>
        <title>Gandalf Movies</title>
        <meta name="description" content=" download with direct link" />
      </>
      <body className="flex flex-col gap-3">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
