import Link from "next/link";

const creditos = [
    { funcao: "Desenvolvedores", nomes: ["Jade Raquel", "Shallyson Luann", "Talita Kauanne", "Vinícius Miguel"] },
    { funcao: "Orientador", nomes: ["Daniel Aguiar"] },
    { funcao: "Coorientador", nomes: ["Henrique Coelho"] },
];

export default function Creditos() {
    return (
        <main className="flex flex-col items-center p-10">

        <h1 className="text-4xl font-bold mb-6">Créditos</h1>

            {creditos.map((grupo) => (
                <section key={grupo.funcao} className="mt-8 text-center">
                    <h2 className="text-xl font-semibold">{grupo.funcao}</h2>

                    {grupo.nomes.map((nomes) => (
                        <p key={nomes}>{nomes}</p>
                    ))}
                </section>
            ))}

        <Link href="/" className="mt-10 underline hover:opacity-70">
            Voltar ao início
        </Link>

        </main>
    );
}