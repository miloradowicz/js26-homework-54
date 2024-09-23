import { FC } from 'react';
import { GameStatus } from '../../types.d';
import './Status.css';

interface StatusProps {
  status: GameStatus;
}

const Status: FC<StatusProps> = ({ status }) => {
  const classList = ['status'];
  let message = null;
  if (status === GameStatus.Won) {
    classList.push('status-success');
    message = 'Congratulations, you won!';
  }
  return <div className={classList.join(' ')}>{message}</div>;
};

export default Status;
