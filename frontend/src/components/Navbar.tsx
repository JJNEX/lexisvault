import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { userEmail, logout } = useAuth();

  if (!userEmail) return null; // não mostra se não estiver logado

  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>LexisVault</h3>

      <div style={styles.links}>
        <Link to="/home">Home</Link>
        <Link to="/compromissos">Compromissos</Link>
        <span>{userEmail}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 24px",
    background: "#222",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
};
