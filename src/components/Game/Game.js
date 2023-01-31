import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard";
import LoseBanner from "../LoseBanner";
import WinBanner from "../WinBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    setGuesses([...guesses, { id: Math.random(), word: guess }]);
  }

  const state =
    guesses.at(-1)?.word === answer
      ? "win"
      : guesses.length === NUM_OF_GUESSES_ALLOWED
      ? "lose"
      : "playing";

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={state !== "playing"} />
      <Keyboard guesses={guesses} answer={answer} />
      {state === "win" && <WinBanner guessCount={guesses.length} />}
      {state === "lose" && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
