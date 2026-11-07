"use client";

import Link from "next/link";
import { useState } from "react";
import FundoLeR from "../../imagens/FundoLeR.png";
import PainelRecpSenha from "../../componentes/PainelRecpSenha";
import { loginUsuario } from "../../../lib/auth";

export default function Login() {
  const [recoveryOpen, setRecoveryOpen] = useState(false);

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);
  const [carregando, setCarregando] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setMensagem("");
    setErro(false);
    setCarregando(true);

    try {
      await loginUsuario({
        nome: nomeUsuario,
        senha,
      });

      setMensagem("Login realizado com sucesso!");

    } catch (error) {
      setErro(true);

      if (error.message === "INVALID_CREDENTIALS") {
        setMensagem("Nome de usuário ou senha incorretos.");
      } else {
        setMensagem("Não foi possível realizar o login. Tente novamente.");
        console.error("Erro no login:", error);
      }

    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-black">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-50 pointer-events-none"
        style={{ backgroundImage: `url(${FundoLeR.src})` }} />

      <form
        onSubmit={handleLogin}
        className="flex flex-col w-full z-10 items-center gap-6" >
        <h1 className="text-4xl text-white font-bold pb-10">
          Login
        </h1>

        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
          required
          autoComplete="username"
          className="w-[min(400px,90vw)] h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" />

        <div className="w-[min(400px,90vw)]">
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" />

          <div className="flex justify-end mt-2">
            <div className="relative">
              <button
                type="button"
                onClick={() => setRecoveryOpen((prev) => !prev)}
                className="text-red-600 text-sm hover:underline" >
                Esqueceu sua senha?
              </button>

              <PainelRecpSenha
                open={recoveryOpen}
                onClose={() => setRecoveryOpen(false)}/>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={carregando}
          className="bg-gray-900 text-white hover:bg-red-700 disabled:opacity-50 flex w-[100px] h-[40px] font-bold rounded-lg items-center justify-center transition-all">
          {carregando ? "Entrando..." : "Entrar"}
        </button>

        {mensagem && (
          <p
            className={`text-sm text-center max-w-[400px] ${
              erro ? "text-red-500" : "text-green-500"
            }`}>
            {mensagem}
          </p>
        )}

        <Link
          href="/Registro"
          className="text-sm text-white font-medium hover:text-red-600 hover:underline">
          Não possuo uma conta
        </Link>

      </form>
    </main>
  );
}
