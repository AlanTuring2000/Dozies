import { useState } from "react";
import { generateDie } from "../utils/utils.js";
import { Header } from "./Header.jsx";
import { Rules } from "./Rules.jsx";
import { DiceComponent } from "./DiceComponent.jsx";
import { RollButton } from "./RollButton.jsx";


function App() {
  // Initialize the state with 12 dice
  const [dice, setDice] = useState(() =>
        Array.from({length: 12}, generateDie));

  return (
    <div className="min-h-screen bg-blue-100">
      <Header />
      <Rules />
      <DiceComponent dice={dice} setDice={setDice} />
      <RollButton dice={dice} setDice={setDice} />
    </div>
  )
}


export { App }