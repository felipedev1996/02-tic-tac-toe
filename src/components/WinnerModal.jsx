export const WinnerModal = () => {
  if (winner === null) {
    return null;
  }

  const winnerText = winner === false ? "Empate" : `Gano!`;

  return (

    <section className="winner">
      <div className="text">
        <h2>{winner === false ? "Empate" : `Gano ${winner} !`}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Jugar de nuevo</button>
        </footer>
      </div>
    </section>
  
  
  
  );
};
