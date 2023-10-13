import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type CarouselIndicatorProps = {
    currentIndex: number;
};

const images = [
    '/images/carousel-1.png',
    '/images/carousel-2.png',
    '/images/carousel-3.png',
    '/images/carousel-1.png', // Duplicate the first image
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
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImageIndex === images.length - 2) {
                // Transition to the duplicated first image
                setCurrentImageIndex(prevIndex => prevIndex + 1);
            } else if (currentImageIndex === images.length - 1) {
                // After a very short delay, jump to the actual first image without transition
                setTimeout(() => {
                    setTransitionEnabled(false);
                    setCurrentImageIndex(0);
                    // Re-enable the transition for the next cycle
                    setTimeout(() => setTransitionEnabled(true), 10);
                }, 10);
            } else {
                setCurrentImageIndex(prevIndex => prevIndex + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const offset = -currentImageIndex * 100;

    return (
        <div className="carousel">
            <div style={{ display: 'flex', transform: `translateX(${offset}%)`, transition: transitionEnabled ? 'transform 0.25s ease-in' : 'none' }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`carousel-${index}`} />
                ))}
            </div>
            <CarouselIndicator currentIndex={currentImageIndex} />
        </div>
    );
}



export default Carousel;
