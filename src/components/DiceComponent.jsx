function DiceComponent({dice,setDice}) {
  // Function to freeze a die
  function freezeDie(index) {setDice(prevDie => prevDie.map((die,i) =>
        i===index? {value: die.value, frozen: !die.frozen} : die))}

  // Render the dice (for demonstration purposes)
  return (
    <main className="my-10 px-10 md:px-20 flex justify-center items-center">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6
            grid-rows-4 sm:grid-rows-3 md:grid-rows-2 gap-4 sm:gap-6 md:gap-8">
        {dice.map((die, index) => (
        <button key={index} aria-label={`A die with the value ${die.value}
              which is ${die.frozen?"" :"not"} frozen`}
              onClick={() => freezeDie(index)}
              className={`flex items-center justify-center w-16 sm:w-20 h-16
                    sm:h-20 border-4 rounded-lg border-blue-500
                    shadow-2xl font-bold
                    text-2xl sm:text-3xl
                    ${die.frozen ? "bg-violet-800 text-violet-200"
                          : "bg-violet-200 text-violet-800"}`}>
          {die.value}</button>))}</div></main>)}


export { DiceComponent }