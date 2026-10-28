import Link from "next/link";
import FundoLeR from "../../imagens/FundoLeR.png";

export default function Login() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-black">
      <div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-50 pointer-events-none"
        style={{ backgroundImage: `url(${FundoLeR.src})` }} />
      <div className="flex flex-col w-full z-10 items-center gap-6">
        <h1 className="text-4xl text-white font-bold pb-10">Login</h1>
        <input type="text" placeholder="Digite seu nome de usuário ou email" className="w-[400px] h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" />
        <div className="w-[400px]">
          <input type="password" placeholder="Digite sua senha"
            className="w-full h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" />
          <div className="flex justify-end mt-2">
            <Link href="" className="text-red-600 text-sm hover:underline">Esqueceu sua senha?</Link>
          </div>
        </div>
        <Link href="/Login" className="bg-gray-900 text-white hover:bg-red-700 flex w-[100px] h-[40px] font-bold rounded-lg items-center justify-center">Entrar</Link>

      </div>
    </main>
  );
}