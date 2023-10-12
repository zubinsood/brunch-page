import React from 'react';

interface ScrollItemProps {
  imageUrl: string;
  text: string;
}

const HorizontalScrollItem: React.FC<ScrollItemProps> = ({ imageUrl, text }) => {
  return (
    <div className="scroll-item">
      <div className="scroll-item-img-container">
        <img className="scroll-item-img" src={imageUrl}></img>
      </div>
      <p className="scroll-item-text">{text}</p>
    </div>
  );
};

export default HorizontalScrollItem;
