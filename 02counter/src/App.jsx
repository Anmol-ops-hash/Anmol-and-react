import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // useState gives two values in array[value one , value two] first value is variable and second value is function to update that variable you can set initial or default value of variable
  let [counter, setCounter] = useState(15);

  // let counter = 15;
  const addValue = () => {
    // console.log("value add", Math.random());
    console.log("clicked", counter);
    counter = counter + 1;
    // setCounter(counter +1)
    setCounter(counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Anmol and react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
