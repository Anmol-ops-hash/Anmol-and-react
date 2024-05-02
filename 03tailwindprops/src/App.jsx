import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "anmol",
    age: 21,
  };
  let newArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4">Tailwind test</h1>
      <Card username="anmol" btnText="click me" />
      <Card username="chill" btnText="visit me" />
    </>
  );
}

export default App;
