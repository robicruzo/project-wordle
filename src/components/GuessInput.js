import React from "react";
export default function GuessInput({handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");


  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    console.log({tentativeGuess});
    setTentativeGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a=zA-Z]{5}"
        title = "5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}
