import React from "react";

function GuessInput({ addGuess, value, setValue, disabled }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (value.length !== 5) {
      return;
    }
    addGuess(value);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        required={true}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
