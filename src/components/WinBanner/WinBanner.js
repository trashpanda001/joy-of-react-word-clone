import React from "react";
import Banner from "../Banner";

function WinBanner({ guessCount }) {
  return (
    <Banner variant="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {guessCount === 1 ? " 1 guess" : ` ${guessCount} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WinBanner;
