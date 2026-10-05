import "./global.css";
import Header from "./componentes/PageIni/Header";
import Footer from "./componentes/PageIni/Footer";
import FundoLOmain from "./imagens/FundoLOmain.png";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-1 bg-center bg-no-repeat bg-[length:100%_100%]" style={{backgroundImage: `url(${FundoLOmain.src})`}} loading="eager">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}