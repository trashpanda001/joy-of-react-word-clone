import React from "react";
import Banner from "../Banner";

function WinBanner({ guessCount, onRestart }) {
  return (
    <Banner variant="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {guessCount === 1 ? " 1 guess" : ` ${guessCount} guesses`}
        </strong>
        .
      </p>
      <p className="restart">
        <button className="restart-button" onClick={onRestart}>
          Restart Game
        </button>
      </p>
    </Banner>
  );
}

export default WinBanner;
