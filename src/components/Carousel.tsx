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
                <div key={index} className={`dot ${currentIndex === index ? 'active' : ''}`}></div>
            ))}
        </div>
    );
}

function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const offset = -currentImageIndex * 100;

    return (
        <div className="carousel">
            <div style={{ display: 'flex', transform: `translateX(${offset}%)`, transition: 'transform 0.5s ease-in' }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`carousel-${index}`} />
                ))}
            </div>
        <CarouselIndicator currentIndex={currentImageIndex} />
        </div>
    );
}

export default Carousel;
