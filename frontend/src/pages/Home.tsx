import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { userEmail, logout } = useAuth();

  return (
    <div style={{ maxWidth: 600, margin: "100px auto" }}>
      <h2>Home</h2>

      <p>
        Bem-vindo, <strong>{userEmail}</strong>
      </p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
