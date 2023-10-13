import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type CarouselIndicatorProps = {
    currentIndex: number;
};

const images = [
    '/images/carousel-1.png',
    '/images/carousel-2.png',
    '/images/carousel-3.png',
];

function CarouselIndicator({ currentIndex }: CarouselIndicatorProps) {
    const { isToggled } = useTheme();
    return (
        <div className={`icon-bar ${isToggled ? 'dark' : 'light'}`}>
            {[0, 1, 2].map(index => (
                <div key={index} className={`dot ${currentIndex % 3 === index ? 'active' : ''}`}></div>
            ))}
        </div>
    );
}

function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [images.length]);

    const offset = -currentImageIndex * 100;

    return (
        <div className="carousel">
            {images.map((image, index) => (
                <img 
                    key={index} 
                    src={image} 
                    alt={`carousel-${index + 1}`}
                    className={`${index === currentImageIndex ? 'active' : ''} ${index === ((currentImageIndex - 1 + images.length) % images.length) ? 'prev' : ''}`}
                />
            ))}
            <CarouselIndicator currentIndex={currentImageIndex} />
        </div>
    );
}

export default Carousel;