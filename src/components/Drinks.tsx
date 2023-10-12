import React from 'react';
import Button from './Button';

const Drinks: React.FC = () => {
  return (
    <div>
      <h1 className='drinks-title'>Drinks</h1> {/* Title added here */}
      <div className="card">
        <div className="row">
          <div className="image-1" />
          <div>
            <div>Samurai Mojito</div>
            <div className="description">
              Refreshing original blend of Japanese Shiso, Yuzu, Sake, and Lemon.
            </div>
          <button className="drinks-button">
            <div className="drinks-button-text">Add to cart</div>
          </button>
          </div>
        </div>
        <div className="row">
          <div className="image-2" />
          <div>
            <div>Hojicha Latte</div>
            <div className="description">
              A velvety, hand-sifted fan favorite that is perfect for cozy weather.
            </div>
            <button className="drinks-button">
            <div className="drinks-button-text">Add to cart</div>
          </button>
            </div>
        </div>
        <div className="row">
          <div className="image-3" />
          <div>
            <div>Maple Latte</div>
            <div className="description">
              A soft and sweet treat! Treat yourself to our creamy Maple Latte with our staple toasts.
            </div>
            <button className="drinks-button">
            <div className="drinks-button-text">Add to cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
