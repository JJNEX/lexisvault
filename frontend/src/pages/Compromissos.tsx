import { useState } from "react";
import ListaCompromissos from "../components/ListaCompromissos";

export default function Compromissos() {
  const [viewMode, setViewMode] = useState<"lista" | "agenda">("lista");

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h2>Compromissos</h2>

      <button onClick={() => setViewMode("lista")}>Lista</button>
      <button onClick={() => setViewMode("agenda")}>Agenda</button>

      <hr />

      {viewMode === "lista" && <ListaCompromissos />}
      {viewMode === "agenda" && <p>Agenda em breve 📅</p>}
    </div>
  );
}