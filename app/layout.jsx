import "./global.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="bg-black flex min-h-screen flex-col">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}