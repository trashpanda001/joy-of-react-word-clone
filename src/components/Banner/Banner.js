import React from "react";

function Banner({ state, guessCount, answer }) {
  if (state === "playing") {
    return null;
  }
  return state === "win" ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {guessCount === 1 ? "1 guess" : `${guessCount} guesses`}
        </strong>
        .
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;
