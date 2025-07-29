import { useState } from "react";
import "./App.css";
import Greet from "./assets/components/Greet";
import Demo from "./assets/components/Demo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greet />
      <Demo />
    </>
  );
}

export default App;
