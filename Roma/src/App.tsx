import { useState } from "react";
import "./App.css";

const frutas = ["banana", "manga", "uva", "pera", "tomate", "caju"];

export default function App() {
  const [busca, setBusca] = useState("");
  const frutasfiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Minhas frutas</h1>
      <input
        type="text"
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />

      <ul>
        {frutasfiltradas.map((fruta) => (
          <li key={fruta}> {fruta}</li>
        ))}
      </ul>
    </div>
  );
}
