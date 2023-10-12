import React from 'react';

interface CardBodyProps {
  title: string;
  description: string;
  buttonText: string;
}

function CardBody({ title, description, buttonText }: CardBodyProps) {
  return (
    <div className='full-card-body'>
      <div className='full-card-body-title'>{title}</div>
      <div className='full-card-body-text'>{description}</div>
      <div className='full-card-body-button'>
        <div className='full-card-body-button-text'>{buttonText}</div>
      </div>
    </div>
  );
}

export default CardBody;
