import EntradaS from "./componentes/PageIni/EntradaS";

export default function HomePage() {
  return (
    <div className="text-white py-5">
      <h1 className="text-6xl font-bold justify-self-center">The Outside Guide</h1>
      <p className="text-xl font-medium justify-self-center py-20">
        Lá fora, nada é o que parece. Descubra o que se esconde além da janela...</p>
      <EntradaS/>
    </div>
  );
}