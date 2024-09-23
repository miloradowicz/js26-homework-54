import { FC } from 'react';

interface CounterProps {
  counter: number;
}

const Counter: FC<CounterProps> = ({ counter }) => {
  return <div className='counter'>{`Moves made: ${counter}`}</div>;
};

export default Counter;
