import React from 'react';
import HorizontalScrollItem from './HorizontalScrollItem';

interface HorizontalScrollProps {
  items: { imageUrl: string; text: string }[];
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ items }) => {
  return (
    <div className="horizontal-scroll">
      <div className='scroll-title'>Favorite Toasts</div>
      <div className="scroll-container">
        {items.map((item, index) => (
          <HorizontalScrollItem key={index} id={index} imageUrl={item.imageUrl} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
