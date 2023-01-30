import React from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      return;
    }
    console.log({ guess });
    addGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        required={true}
      />
    </form>
  );
}

export default GuessInput;
