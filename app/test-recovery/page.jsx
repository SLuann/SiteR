"use client";

import { useState } from "react";
import {
  sendRecoveryCode,
  verifyRecoveryCode,
  updateRecoveryPassword,
} from "../../lib/recovery";

export default function TestRecovery() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function sendCode() {
    try {
      await sendRecoveryCode(email);
      setMessage("Código enviado!");
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function verifyCode() {
    try {
      await verifyRecoveryCode(email, code);
      setMessage("Código confirmado!");
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function changePassword() {
    try {
      await updateRecoveryPassword(password);
      setMessage("Senha atualizada!");
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <h1 className="mb-6 text-2xl font-bold">
        Teste de recuperação
      </h1>

      <div className="max-w-md space-y-4">
        <input
          className="w-full rounded-lg bg-zinc-800 p-3"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={sendCode}
          className="rounded-lg bg-violet-600 p-3"
        >
          Enviar código
        </button>

        <input
          className="w-full rounded-lg bg-zinc-800 p-3"
          placeholder="Código recebido"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          onClick={verifyCode}
          className="rounded-lg bg-blue-600 p-3"
        >
          Confirmar código
        </button>

        <input
          type="password"
          className="w-full rounded-lg bg-zinc-800 p-3"
          placeholder="Nova senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={changePassword}
          className="rounded-lg bg-green-600 p-3"
        >
          Atualizar senha
        </button>

        <p>{message}</p>
      </div>
    </main>
  );
}