
import {range} from "../utils"
import {checkGuess} from "../game-helpers"



export default function Guess({value,answer}) {
  function Cell({letter,status}){
    const  className = status ? `cell ${status}` : 'cell';

    return <span className={className} > {letter} </span>
  }
  const result  = checkGuess(value,answer);
  

  return (
    <p className="guess">
        
        {
            range(5).map((num) => (
                <Cell key = {num} letter={result ? result[num].letter : undefined} status={result ? result[num].status : undefined}/>
            ))
          }
      </p>
  );
    



    
}
