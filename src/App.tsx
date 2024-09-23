import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Game from './lib/Game';
import Button from './components/Button/Button';
import Status from './components/Status/Status';
import { GameStatus } from './types.d';
import Counter from './components/Counter/Counter';

const rows = 6,
  cols = 6;

const game = new Game(rows, cols);

const App = () => {
  const [board, setBoard] = useState(game.board);
  const [counter, setCounter] = useState(game.counter);
  const [finished, setFinished] = useState(game.finished);

  const updateState = () => {
    setBoard(game.board);
    setCounter(game.counter);
    setFinished(game.finished);
  };

  const onCellClick = (row: number, col: number) => {
    try {
      game.click(row, col);
      updateState();
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        console.error(err);
      }
    }
  };

  const onReset = () => {
    game.reset();
    updateState();
  };

  return (
    <>
      <div className='card'>
        <Button caption='New game' onClick={onReset} />
        <Board rows={rows} cols={cols} board={board} onCellClick={onCellClick} />
        <Counter counter={counter} />
        {finished ? <Status status={GameStatus.Won} /> : null}
      </div>
    </>
  );
};

export default App;
