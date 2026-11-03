import { supabase } from "./supabase";

export async function sendRecoveryCode(email) {
  const { error } = await supabase.auth.resetPasswordForEmail(
    email.trim()
  );

  if (error) throw error;
}

export async function verifyRecoveryCode(email, code) {
  const { data, error } = await supabase.auth.verifyOtp({
    email: email.trim(),
    token: code.trim(),
    type: "recovery",
  });

  if (error) throw error;

  if (!data.session) {
    throw new Error("Sessão de recuperação não criada.");
  }

  return data.session;
}

export async function updateRecoveryPassword(password) {
  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw error;
}