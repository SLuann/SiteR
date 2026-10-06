import Header from "./componentes/PageIni/Header";
import Footer from "./componentes/PageIni/Footer";
import EntradaS from "./componentes/PageIni/EntradaS";
import FundoLOmain from "./imagens/FundoLOmain.png";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main
                className="flex-1 bg-center bg-no-repeat bg-[length:100%_100%] text-white py-5"
                style={{ backgroundImage: `url(${FundoLOmain.src})` }}
            >
                <h1 className="text-8xl font-bold text-center">
                    The Outside Guide
                </h1>

                <p className="text-xl font-medium text-center py-20">
                    Lá fora, nada é o que parece. Descubra o que se esconde além da janela...
                </p>

                <EntradaS />
            </main>

            <Footer />
        </div>
    );
}