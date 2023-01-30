import React from "react";

function Guess({ guess }) {
  const letters = guess ? guess.split("") : Array(5).fill(null);
  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
