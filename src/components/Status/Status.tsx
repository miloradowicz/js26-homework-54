import { FC } from 'react';
import { GameStatus } from '../../types.d';

interface StatusProps {
  status: GameStatus;
}

const Status: FC<StatusProps> = ({ status }) => {
  return <div className='status'>{status === GameStatus.Won ? 'Congratulations, you won!' : null}</div>;
};

export default Status;
