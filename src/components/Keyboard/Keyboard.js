import React from "react";
import { checkGuess } from "../../game-helpers";

function Keyboard({ guesses, answer }) {
  const used = guesses.map((guess) => guess.word).join("");
  const check = checkGuess(guesses.at(-1)?.word, answer);

  function letterStatus(letter) {
    let status = check?.find((c) => c.letter === letter)?.status;
    if (!status) {
      status = used.includes(letter) ? "incorrect" : "unused";
    }
    return status;
  }

  const layout = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    "ZXCVBNM".split(""),
  ];

  return (
    <div className="keyboard">
      {layout.map((row, index) => (
        <p key={index} className="keyboard-row">
          {row.map((letter) => (
            <span
              key={letter}
              className={`keyboard-key ${letterStatus(letter)}`}
            >
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
