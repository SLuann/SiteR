import Link from "next/link";
import FundoLeR from "../../imagens/FundoLeR.png";

export default function Registro() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${FundoLeR.src})` }} />
        <div className="flex flex-col z-10 items-center gap-6">
            <h1 className="text-4xl text-white font-bold pb-10">Crie sua conta</h1>
            <input type="text" placeholder="Digite seu nome" className="w-[400px] h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"/>
            <input type="text" placeholder="Digite seu email" className="w-[400px] h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"/>
            <input type="text" placeholder="Digite sua senha" className="w-[400px] h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"/>
            <Link href="/Login" className="bg-white hover:bg-red-700 flex w-[100px] h-[40px] font-bold rounded-lg items-center justify-center">
                Cadastre-se
            </Link>
            <Link href="/Login" className="text-sm text-white font-medium hover:text-red-600 hover:underline">Já possuo uma conta</Link>
        </div>
    </main>
  );
}