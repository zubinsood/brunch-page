import React from 'react';
import { useCart } from '../contexts/CartContext';

interface ButtonProps {
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  const { addToCart } = useCart();

  return (
    <button className='read-more-button' onClick={addToCart}>{buttonText}</button>
  );
};

export default Button;

