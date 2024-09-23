import { FC } from 'react';
import Cell from './Cell/Cell';
import { CellState } from '../../types';
import './Board.css';

interface BoardProps {
  rows: number;
  cols: number;
  board: CellState[];
  active: boolean;
  onCellClick: (a1: number, a2: number) => void;
}

const Board: FC<BoardProps> = ({ rows, cols, board, active, onCellClick }) => {
  if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows < 1 || cols < 1) {
    throw new Error('Rows and cols must be positive integers.');
  }

  const rowsRange = Array.from({ length: rows }, (_, i) => i);
  const colsRange = Array.from({ length: cols }, (_, i) => i);

  return (
    <div
      className='board'
      data-active={active}
      style={{ gridTemplateRows: `repeat(${rows}, minmax(50px, 1fr))`, gridTemplateColumns: `repeat(${cols}, minmax(50px, 1fr))` }}
    >
      {rowsRange
        .map((x) =>
          colsRange.map((y) => (
            <Cell
              key={`cell-${x}-${y}`}
              row={x + 1}
              col={y + 1}
              clicked={board[x * cols + y].clicked}
              hasItem={board[x * cols + y].hasItem}
              onClick={() => onCellClick(x, y)}
            />
          ))
        )
        .flat()}
    </div>
  );
};

export default Board;
