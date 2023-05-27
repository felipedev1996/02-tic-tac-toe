import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS} from './constants';
import { checkWinner } from "./logic/board";
import { Square } from "./components/Square";





function App() {
 

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null); 
  }
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkEndGame = (newBoard) => { 
    return newBoard.every(square => square !== null) 
  
   }

  const updateBoard = (index) => {
    //no actualizamos el board si ya hay un ganador
    if (board[index] || winner) return;

    //actualizamos el board

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    console.log(board);

    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti(
        {particleCount: 150}
      );
      setWinner(newWinner)
     
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
    
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}><h2>Reiniciar juego</h2></button>

      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      
    </main>
  );
}
export default App;
