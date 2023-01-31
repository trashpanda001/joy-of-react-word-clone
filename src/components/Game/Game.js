import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard";
import LoseBanner from "../LoseBanner";
import WinBanner from "../WinBanner";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  console.info({ answer });

  function addGuess(guess) {
    setGuesses([...guesses, { id: Math.random(), word: guess }]);
    setInputValue("");
  }

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
  }

  function handleLetterClick(letter) {
    const length = inputValue.length;
    if (letter === "⌫") {
      if (length >= 1) {
        setInputValue(inputValue.slice(0, length - 1));
      }
      return;
    }
    if (letter === "↵") {
      if (length === 5) {
        addGuess(inputValue);
      }
      return;
    }
    if (length < 5) {
      setInputValue(inputValue + letter);
    }
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
      <GuessInput
        addGuess={addGuess}
        value={inputValue}
        setValue={setInputValue}
        disabled={state !== "playing"}
      />
      <Keyboard
        guesses={guesses}
        answer={answer}
        onLetterClick={handleLetterClick}
      />
      {state === "win" && (
        <WinBanner guessCount={guesses.length} onRestart={handleRestart} />
      )}
      {state === "lose" && (
        <LoseBanner answer={answer} onRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
