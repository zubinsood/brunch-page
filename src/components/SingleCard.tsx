import React from 'react'
import { useCart } from '../contexts/CartContext';
import Button from './Button';

interface SingleCardProps {
    id: number;
    imageUrl: string;
    title: string;
    text: string;
    buttonText: string;
  }
  
  const SingleCard: React.FC<SingleCardProps> = ({ id, imageUrl, title, text, buttonText }) => {
    const bodyClass = `single-card-${id}-body`;

  return (
    <div className='single-card-container'>
        <img className='single-card-image' src={imageUrl} alt={text}></img>
        <div className={bodyClass}>
            <div className='single-card-body-title'>{title}</div>
            <p className='single-card-body-text'>{text}</p>
            <Button buttonText={buttonText}/>
            {/* <div className='single-card-button'>
                <div className='single-card-button-text'>Add to Cart</div>
            </div> */}
        </div>
    </div>
  )
}

export default SingleCard