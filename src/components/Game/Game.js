import React from "react";
import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import Guess from "../Guess";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [guesses,setGuesses] = React.useState([]);
  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses,tentativeGuess]);

  }

  
  return (
    <>
      <GuessResults answer = {answer} guesses={guesses}/>
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
