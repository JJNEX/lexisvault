import { useEffect, useState } from "react";

type Compromisso = {
  id: number;
  titulo: string;
  dataHora: string;
  tipo: string;
  status: string;
};

export default function ListaCompromissos() {
  const [compromissos, setCompromissos] = useState<Compromisso[]>([]);

  useEffect(() => {
    // 🔥 MOCK (depois vira API)
    const data: Compromisso[] = [
      {
        id: 1,
        titulo: "Audiência Trabalhista",
        dataHora: "2026-04-20T09:00",
        tipo: "Audiência",
        status: "Pendente",
      },
      {
        id: 2,
        titulo: "Reunião com Cliente",
        dataHora: "2026-04-21T14:00",
        tipo: "Reunião",
        status: "Concluído",
      },
    ];

    setCompromissos(data);
  }, []);

  function formatarData(data: string) {
    return new Date(data).toLocaleString("pt-BR");
  }

  return (
    <div>
      <h3>Lista de Compromissos</h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {compromissos.map((c) => (
            <tr key={c.id}>
              <td>{c.titulo}</td>
              <td>{formatarData(c.dataHora)}</td>
              <td>{c.tipo}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}