import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Login() {

  //Definição dos atributos do Login
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


//Função de validação de Login

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/home");

    } catch (err: any) {
      if (err.response?.status === 401) {
        setError("Email ou senha inválidos");
      } else {
        setError("Erro ao conectar com o servidor");
      }
    }
  }

  return ( 
    //Formulário de Login e Senha + Botão de Entrar
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Entrar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
