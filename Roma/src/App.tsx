import { useEffect, useState } from "react";
import "./App.css";
import { PetResult } from "./api/api.props";
import { getPets } from "./api/api";

function App() {
  const [busca, setBusca] = useState("");
  const [petList, setPetList] = useState<PetResult[]>([]);

  const petsFiltrados = petList.filter(
    (pet) =>
      pet.name.toLowerCase().includes(busca.toLowerCase()) ||
      pet.description.toLowerCase().includes(busca.toLowerCase())
  );

  useEffect(() => {
    getPets().then((result) => setPetList(result));
  }, []);

  return (
    <div className="App">
      <h1>Pets</h1>
      <input
        type="text"
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />

      <ul>
        {petsFiltrados.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;

// treinamento
/*const numeros = [-2, -1, 0, 1, 2];
const numerosFiltrados = numeros.filter((numero)=> {
  return numero > 0;
});
console.log(numerosFiltrados);*/

/*interface pessoas {
  idade: number;
  nome: string;
}

const pessoas = [
  {
    nome: "Enzo",
    idade: 5,
  },
  {
    nome: "Geraldo",
    idade: 11,
  },
];
const usuarioDigitou = "e";

pessoas.filter((pessoa) => pessoa.nome.toLowerCase().includes(usuarioDigitou));*/
