import { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  caption: string;
  onClick: MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ caption, onClick }) => {
  return (
    <button type='button' onClick={onClick}>
      {caption}
    </button>
  );
};

export default Button;
