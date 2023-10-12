import React from 'react';
import Button from './Button';

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
      <Button buttonText={buttonText}/>
    </div>
  );
}

export default CardBody;
