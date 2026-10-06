import "./global.css";
import Header from "./componentes/PageIni/Header";
import Footer from "./componentes/PageIni/Footer";
import FundoLOmain from "./imagens/FundoLOmain.png";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen">
          {children}
      </body>
    </html>
  );
}