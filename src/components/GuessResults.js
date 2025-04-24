
import Guess from "./Guess"
import {NUM_OF_GUESSES_ALLOWED} from "../constants";
import {range} from "../utils";

export default function GuessResults({guesses,answer}) {

    return (

        <div className="guess-results">
            {
                range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                    <Guess  answer = {answer} key= {num} value = {guesses[num]}/>
                ))
            }
        </div>
    )
}