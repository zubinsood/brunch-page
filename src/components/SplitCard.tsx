import React from 'react'
import SingleCard from './SingleCard'

interface SplitCardProps {
    items: { imageUrl: string; name: string; text: string }[];
}

const SplitCard: React.FC<SplitCardProps> = ({ items }) => {
    return (
    <div className='split-card-component'>
        <div className='split-card-title'>Favorite Plates</div>
        <div className='split-card-container'>
        {items.map((item, index) => (
          <SingleCard key={index} id={index} imageUrl={item.imageUrl} title={item.name} text={item.text} />
        ))}
        </div>
    </div>
  )
};

export default SplitCard