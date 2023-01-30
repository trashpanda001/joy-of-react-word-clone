import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const letters = guess
    ? checkGuess(guess, answer)
    : Array(5).fill({ letter: "", status: "" });
  return (
    <p className="guess">
      {letters.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
