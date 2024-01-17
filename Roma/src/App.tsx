import "./App.css";

const frutas = ["banana", "manga", "uva", "pera", "tomate", "caju"];

export default function App() {
  return (
    <div className="App">
      <h1>Minhas frutas</h1>
      <input type="text" />
      <ul>
        {" "}
        {frutas.map((fruta) => (
          <li key={fruta}> {fruta}</li>
        ))}
      </ul>
    </div>
  );
}
