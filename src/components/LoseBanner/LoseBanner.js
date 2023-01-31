import React from "react";
import Banner from "../Banner";

function LoseBanner({ answer, onRestart }) {
  return (
    <Banner variant="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <p className="restart">
        <button className="restart-button" onClick={onRestart}>
          Restart Game
        </button>
      </p>
    </Banner>
  );
}

export default LoseBanner;
