import React from 'react';

interface ButtonProps {
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <div className='read-more-button'>
      <div className='button-text'>{buttonText}</div>
    </div>
  );
};

export default Button;

