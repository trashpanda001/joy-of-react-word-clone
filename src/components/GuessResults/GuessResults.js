import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses, answer }) {
  const remaining = NUM_OF_GUESSES_ALLOWED - guesses.length;
  return (
    <div className="guess-results">
      {guesses.map(({ id, word }) => (
        <Guess key={id} guess={word} answer={answer} />
      ))}
      {range(remaining).map((i) => (
        <Guess key={i} />
      ))}
    </div>
  );
}

export default GuessResults;
