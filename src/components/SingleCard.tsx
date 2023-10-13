import React from 'react'

interface SingleCardProps {
    id: number;
    imageUrl: string;
    title: string;
    text: string;
  }
  
  const SingleCard: React.FC<SingleCardProps> = ({ id, imageUrl, title, text }) => {
    const bodyClass = `single-card-${id}-body`;

  return (
    <div className='single-card-container'>
        <img className='single-card-image' src={imageUrl} alt={text}></img>
        <div className={bodyClass}>
            <div className='single-card-body-title'>{title}</div>
            <p className='single-card-body-text'>{text}</p>
            <div className='single-card-button'>
                <div className='single-card-button-text'>Add to Cart</div>
            </div>
        </div>
    </div>
  )
}

export default SingleCard