import React from 'react';
import Button from './Button';

interface DrinkProps {
  buttonText: string;
}

const Drinks: React.FC<DrinkProps> = ({buttonText}) => {
  return (
    <div>
      <h1 className='drinks-title'>Drinks</h1> {/* Title added here */}
      <div className="card">
        <div className="row">
          <div className="image-1" />
          <div>
            <div className='drink-name'>Samurai Mojito</div>
      
            <div className="description">
              Refreshing original blend of Japanese Shiso, Yuzu, Sake, and Lemon.
            </div> <br/>
      git 
            <Button buttonText="Add to cart"/>
          </div>
        </div>
        <div className="row">
          <div className="image-2" />
          <div>
            <div className='drink-name'>Hojicha Latte</div>
            <div className="description">
              A velvety, hand-sifted fan favorite that is perfect for cozy weather.
            </div> <br/>
            <Button buttonText="Add to cart"/>
            </div>
        </div>
        <div className="row">
          <div className="image-3" />
          <div>
            <div className='drink-name1'>Maple Latte</div>
            <div className="description1">
              A soft and sweet treat! Treat yourself to our creamy Maple Latte with our staple toasts.
            </div> <br/>
            <Button buttonText="Add to cart"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;