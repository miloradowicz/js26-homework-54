import { FC, MouseEventHandler } from 'react';
import './Button.css';

interface ButtonProps {
  caption: string;
  onClick: MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ caption, onClick }) => {
  return (
    <button type='button' className='btn' onClick={onClick}>
      {caption}
    </button>
  );
};

export default Button;
