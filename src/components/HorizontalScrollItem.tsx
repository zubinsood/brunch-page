import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ScrollItemProps {
  imageUrl: string;
  text: string;
}

const HorizontalScrollItem: React.FC<ScrollItemProps> = ({ imageUrl, text }) => {
  const { isToggled } = useTheme();
  return (
    <div className={`scroll-item ${isToggled ? 'dark' : 'light'}`}>
      <div className="scroll-item-img-container">
        <img className="scroll-item-img" src={imageUrl}></img>
      </div>
      <p className="scroll-item-text">{text}</p>
    </div>
  );
};

export default HorizontalScrollItem;
