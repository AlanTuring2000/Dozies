import Confetti from "react-confetti";
import { useState, useEffect, useRef } from "react";
import { generateDie } from "../utils/utils.js";


function RollButton({dice, setDice}) {
  const [showConfetti, setShowConfetti] = useState(false);
  /* Create a ref for the button so that, when the game is won, the focus is
  placed on the "Play again!" button, so the keyboard user will only need to
  press "Enter".
  Note that, here, this is only for pedagogical purposes; indeed, the last
  action the player does before winning is to press the button to get dice
  values that align with his frozen dice values, so the focus is already on
  the button... */
  const buttonRef = useRef(null); // Create a ref for the button
  let isWon = dice.every(die => die.value === dice[0].value);


  function rollDice() {
    // Start a new game when "Play again!" is clicked (after winning)
    if (isWon) {
      setShowConfetti(false)  // Stop the confetti
      setDice(Array.from({length: 12},
            () => ({...generateDie(), frozen: false})))}
    else {
      const newDice = dice.map(die => die.frozen? die
            : {...generateDie(), frozen: die.frozen});
      setDice(newDice);
      // Update "isWon"
      isWon = newDice.every(die => die.value === newDice[0].value);
      // Start the confetti if the game is won
      if (isWon) {setShowConfetti(true)}}}
  
  
  useEffect(() => {if (isWon) {buttonRef.current.focus()}}, [isWon]);
      

  return (<div className="flex justify-center items-center">
    {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    <div aria-live="polite" className="sr-only">{isWon && <p>Congratulations!
          You won! Press "Play again!" to... well... play again! 😉</p>}</div>
    <button ref={buttonRef} // Attach the ref to the button
          onClick={rollDice} className="mx-8 my-2 border-2 rounded-md
          border-purple-500 bg-purple-200 p-4 font-semibold text-lg
          md:text-2xl text-purple-800">
          {isWon? (<><span>🎉Bravo!🎉</span><br/>
                <span>Play again!</span></>)
                : "Roll"}</button></div>)}


export { RollButton }