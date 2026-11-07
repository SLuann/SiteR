import { supabase } from "./supabase";

// Cadastro
export async function cadastrarUsuario({ nome, email, senha }) {

  // Verifica se o nome está disponível
  const { data: nomeDisponivel, error: erroNome } =
    await supabase.rpc("verificar_nome_usuario", {
      p_nome: nome.trim()
    });

  if (erroNome) throw erroNome;

  if (!nomeDisponivel) {
    throw new Error("USERNAME_ALREADY_EXISTS");
  }

  // Realiza o cadastro
  const { data, error } = await supabase.auth.signUp({
    email: email.trim(),
    password: senha,
    options: {
      data: {
        nome_user: nome.trim()
      }
    }
  });

  if (error) throw error;

  // Verifica se o email já está cadastrado
  if (data.user && data.user.identities?.length === 0) {
    throw new Error("EMAIL_ALREADY_EXISTS");
  }

  return data;
}

// Login
export async function loginUsuario({ nome, senha }) {
  const { data, error } = await supabase.functions.invoke(
    "login-usuario",
    {
      body: {
        nome,
        senha,
      },
    }
  );

  if (error) {
    console.error("Erro na função de login:", error);
    throw new Error("Não foi possível realizar o login. Tente novamente.");
  }

  if (data?.error === "INVALID_CREDENTIALS") {
    throw new Error("INVALID_CREDENTIALS");
  }

  if (data?.error || !data?.session) {
    throw new Error("LOGIN_FAILED");
  }

  // Salva a sessão no cliente Supabase
  const { data: sessionData, error: sessionError } =
    await supabase.auth.setSession({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });

  if (sessionError) throw sessionError;

  return sessionData;
}

// Logout
export async function logoutUsuario() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}