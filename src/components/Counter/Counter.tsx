import { FC } from 'react';
import './Counter.css';

interface CounterProps {
  counter: number;
}

const Counter: FC<CounterProps> = ({ counter }) => {
  return (
    <div className='counter'>
      Moves made:<span>{counter}</span>
    </div>
  );
};

export default Counter;
