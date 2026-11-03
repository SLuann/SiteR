"use client";

import { useState } from "react";
import {sendRecoveryCode, verifyRecoveryCode, updateRecoveryPassword} from "../../lib/recovery";

export default function PainelRecpSenha({ open, onClose }) {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSendCode() {
    setLoading(true);
    setMessage("");

    try {
      await sendRecoveryCode(email);
      setStep("code");
      setMessage("Código enviado para seu e-mail!");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyCode() {
    setLoading(true);
    setMessage("");

    try {
      await verifyRecoveryCode(email, code);
      setModalOpen(true);
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleChangePassword() {
    setMessage("");

    if (password.length < 8) {
      setMessage("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      await updateRecoveryPassword(password);
      setMessage("Senha atualizada com sucesso!");
      setModalOpen(false);
      onClose();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (!open && !modalOpen) return null;

  return (
    <>
      {open && !modalOpen && (
        <div className="absolute bottom-full right-0 mb-3 w-[320px]
          rounded-xl border border-red-900 bg-zinc-950 p-4
          shadow-xl shadow-black/50 text-white z-30">

          <button
            onClick={onClose}
            className="absolute right-3 top-2 text-zinc-400 hover:text-white">
            ✕
          </button>

          {step === "email" ? (
            <>
              <h2 className="text-lg justify-self-center font-bold text-red-700 mb-3">
                Recuperar senha
              </h2>

              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-zinc-900 p-3
                  text-white outline-none focus:ring-1 focus:ring-red-800" />

              <button
                onClick={handleSendCode}
                disabled={loading || !email.trim()}
                className="mt-3 w-full rounded-lg bg-gray-900 p-2
                  font-semibold hover:bg-red-700 disabled:opacity-50">
                {loading ? "Enviando..." : "Enviar código"}
              </button>
            </>
          ) : (
            <>
              <h2 className="text-lg justify-self-center font-bold text-red-600 mb-3">
                Verificar código
              </h2>

              <p className="text-sm text-zinc-400 mb-3">
                Digite o código enviado para {email}.
              </p>

              <input
                type="text"
                inputMode="numeric"
                placeholder="Código de recuperação"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full rounded-lg bg-zinc-900 p-3
                  text-white outline-none focus:ring-1 focus:ring-red-800"
              />

              <button
                onClick={handleVerifyCode}
                disabled={loading || !code.trim()}
                className="mt-3 w-full rounded-lg bg-gray-900 p-2
                  font-semibold hover:bg-red-700 disabled:opacity-50"
              >
                {loading ? "Verificando..." : "Confirmar código"}
              </button>

              <button
                onClick={() => {
                  setStep("email");
                  setCode("");
                  setMessage("");
                }}
                className="mt-2 w-full text-sm text-zinc-400 hover:text-white"
              >
                Voltar
              </button>
            </>
          )}

          {message && (
            <p className="justify-self-center mt-3 text-sm text-zinc-300">{message}</p>
          )}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center
          bg-black/70 backdrop-blur-sm p-4">

          <div className="w-full max-w-md rounded-2xl border border-red-900
            bg-zinc-950 p-6 text-white shadow-2xl">

            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Nova senha
            </h2>

            <p className="text-sm text-zinc-400 mb-5">
              Crie uma nova senha para sua conta.
            </p>

            <input
              type="password"
              placeholder="Nova senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3 w-full rounded-lg bg-zinc-900 p-3
                text-white outline-none focus:ring-1 focus:ring-red-600"
            />

            <input
              type="password"
              placeholder="Confirme sua nova senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg bg-zinc-900 p-3
                text-white outline-none focus:ring-1 focus:ring-red-600"
            />

            {message && (
              <p className="mt-3 text-sm text-zinc-300">{message}</p>
            )}

            <button
              onClick={handleChangePassword}
              disabled={loading}
              className="mt-5 w-full rounded-lg bg-red-800 p-3
                font-bold hover:bg-red-700 disabled:opacity-50"
            >
              {loading ? "Atualizando..." : "Atualizar senha"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}