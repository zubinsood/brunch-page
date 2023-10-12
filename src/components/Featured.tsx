import React from 'react';
import CardImage from './FeaturedCardImg';
import CardBody from './FeaturedCardBody';

interface FeaturedProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

function Featured({ title, description, buttonText, imageUrl }: FeaturedProps) {
  return (
    <div className='full-card-container'>
      <div className='featured-title'>Featured</div>
      <div className='full-card'>
        <CardImage imageUrl={imageUrl} title={title} />
        <CardBody title={title} description={description} buttonText={buttonText} />
      </div>
    </div>
  );
}

export default Featured;
