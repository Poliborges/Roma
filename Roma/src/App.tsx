import { useState } from "react";
import "./App.css";

const pets = ["bella", "salem", "lupy", "castor", "flicky", "pupi"];

export default function App() {
  const [busca, setBusca] = useState("");
  const petsfiltrados = pets.filter((pet) =>
    pet.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Pets</h1>
      <input
        type="text"
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />

      <ul>
        {petsfiltrados.map((pet) => (
          <li key={pet}> {pet}</li>
        ))}
      </ul>
    </div>
  );
}
