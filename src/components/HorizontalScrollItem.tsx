import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ScrollItemProps {
  imageUrl: string;
  text: string;
  id: number;
}

const HorizontalScrollItem: React.FC<ScrollItemProps> = ({ id, imageUrl, text }) => {
  const { isToggled } = useTheme();

  const uniqueClassName = `scroll-item-img-${id}`;

  return (
    <div className={`scroll-item ${isToggled ? 'dark' : 'light'}`}>
      <div className="scroll-item-img-container">
        <img className={uniqueClassName} src={imageUrl} alt={text}></img>
      </div>
      <p className="scroll-item-text">{text}</p>
    </div>
  );
};

export default HorizontalScrollItem;
