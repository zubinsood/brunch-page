import React from 'react';

interface CardImageProps {
  imageUrl: string;
  title: string;
}

function CardImage({ imageUrl, title }: CardImageProps) {
  return (
    <div className='full-card-img'>
    </div>
  );
}

export default CardImage;
