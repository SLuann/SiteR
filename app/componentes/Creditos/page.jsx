import Link from "next/link";

export default function Creditos() {
    return (
        <main className="flex flex-col items-center p-10">

            <h1>Créditos</h1>

            <h2>Sobre o projeto</h2>
            <p>Descrição do projeto.</p>

            <h2>Desenvolvedores</h2>
            <p>Nome do desenvolvedor 1</p>
            <p>Nome do desenvolvedor 2</p>

            <h2>Tecnologias utilizadas</h2>
            <p>Next.js, React e Tailwind CSS.</p>

            <Link href="/">
                Voltar ao início
            </Link>

        </main>
    );
}