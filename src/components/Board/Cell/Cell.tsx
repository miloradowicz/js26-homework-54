import { FC, MouseEventHandler } from 'react';
import './Cell.css';

interface CellProps {
  row: number;
  col: number;
  clicked: boolean;
  hasItem: boolean;
  onClick: MouseEventHandler;
}

const Cell: FC<CellProps> = ({ row, col, clicked, hasItem, onClick }) => {
  const classList = ['cell'];

  if (clicked) {
    classList.push('clicked');
  }

  if (hasItem) {
    classList.push('has-item');
  }

  return <div className={classList.join(' ')} onClick={onClick} style={{ gridRow: row, gridColumn: col }} />;
};

export default Cell;
