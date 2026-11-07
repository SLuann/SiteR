"use client";

import Link from "next/link";
import { useState } from "react";
import FundoLeR from "../../imagens/FundoLeR.png";
import { cadastrarUsuario } from "../../../lib/auth";

export default function Registro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);
  const [carregando, setCarregando] = useState(false);


  async function handleCadastro(e) {
    e.preventDefault();

    setMensagem("");
    setErro(false);
    setCarregando(true);

    try {
      const data = await cadastrarUsuario({
        nome,
        email,
        senha,
      });

      if (!data.session) {
        setMensagem(
          "Cadastro realizado! Verifique seu email para confirmar a conta."
        );
      } else {
        setMensagem("Conta criada com sucesso!");
      }


    } catch (error) {
      setErro(true);

      const mensagemErro = error.message?.toLowerCase() || "";

      if (error.message === "USERNAME_ALREADY_EXISTS") {
        setMensagem("Nome de usuário já está em uso.");

      } else if (error.message === "EMAIL_ALREADY_EXISTS") {
        setMensagem("Este email já está cadastrado.");

      } else if (
        mensagemErro.includes("password") ||
        mensagemErro.includes("senha")
      ) {
        setMensagem("A senha precisa ter pelo menos 8 caracteres.");

      } else {
        setMensagem("Não foi possível realizar o cadastro. Tente novamente.");
        console.error("Erro no cadastro:", error);
      }
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-black">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${FundoLeR.src})` }} />

      <form onSubmit={handleCadastro} className="flex flex-col z-10 items-center gap-6">
        <h1 className="text-4xl text-white font-bold pb-10">
          Crie sua conta
        </h1>

        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          autoComplete="username"
          className="w-[min(400px,90vw)] h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" />

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="w-[min(400px,90vw)] h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          minLength={8}
          autoComplete="new-password"
          className="w-[min(400px,90vw)] h-[50px] font-medium bg-zinc-900 rounded-xl px-2 text-white placeholder-zinc-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" />

        <button
          type="submit"
          disabled={carregando}
          className="bg-gray-900 text-white hover:bg-red-700 disabled:opacity-50 flex w-[120px] h-[40px] font-bold rounded-lg items-center justify-center transition-all" >
          {carregando ? "Cadastrando..." : "Cadastre-se"}
        </button>

        {mensagem && (
          <p className={`text-sm text-center max-w-[400px] ${erro ? "text-red-700" : "text-green-500"}`}>
            {mensagem}
          </p>
        )}

        <Link href="/Login"
          className="text-sm text-white font-medium hover:text-red-600 hover:underline">
          Já possuo uma conta
        </Link>
      </form>
    </main>
  );
}