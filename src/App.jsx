import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Log from './components/Log'

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePLayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player ==='X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex}, player: currentPlayer },
         ...prevTurns];
         return updatedTurns;
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          initialName="Player 1"
          symbol="X"
          isActive={activePLayer === 'X'}
        />
        <Player
          initialName="Player 2"
          symbol="O"
          isActive={activePLayer === 'O'}
        />
      </ol>
      <GameBoard
        onSelectSquare={handleSelectSquare}
        turns={gameTurns}/>
    </div>
    <Log turns={gameTurns}/>
  </main>
}

export default App
