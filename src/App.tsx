import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import HorizontalScroll from './components/HorizontalScroll'
import Featured from './components/Featured'
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Drinks from './components/Drinks';
import SplitCard from './components/SplitCard';

function App() {
  const [featuredTitle, setFeaturedTitle] = useState<string>("Davelle’s Original Uni Pasta");
  const [featuredCardDescription, setFeaturedCardDescription] = useState<string>(
    "An uni (sea urchin) lover’s heaven filled with umami. Limited quantity available daily!"
  );
  const [featuredCardButtonText, setFeaturedCardButtonText] = useState<string>("Add to cart");
  const [featuredCardImageUrl, setFeaturedCardImageUrl] = useState<string>("your-image-url.jpg");
  const [scrollItems, setScrollItems] = useState([
    { imageUrl: '/images/egg-toast-1.png', text: 'Ham Egg' },
    { imageUrl: '/images/cheese-toast-1.png', text: 'Cheese Curry' },
    { imageUrl: '/images/chocolate-toast-1.png', text: 'Ogura' },
    { imageUrl: '/images/jelly-toast-1.png', text: 'Berry & Cream Cheese' },
    { imageUrl: '/images/stripe-toast-1.png', text: 'Mentai Mayo' },
    { imageUrl: '/images/lemon-toast-1.png', text: 'Honey Lemon' },
  ]);
  const [favPlates, setFavPlates] = useState([
    { imageUrl: '/images/mentai-cheese.png', name: 'Mentai Cheese Potato Croquettes', text: "These croquettes are wonderfully crispy on the outside and scrumptiously soft and cheesy inside."},
    { imageUrl: '/images/katsudon.png', name: 'Katsudon', text: "Our Katsu is a deep-fried chicken cutlet and it’s cooked with egg, onions and our special sauce."},
  ]);

  return (
    <ThemeProvider>
      <CartProvider>
        <NavBar />
        <Carousel />
        <HorizontalScroll items={scrollItems}/>
        <Featured title = {featuredTitle} description = {featuredCardDescription} buttonText= {featuredCardButtonText} imageUrl= {featuredCardImageUrl}/>
        <Drinks buttonText= {featuredCardButtonText}/>
        <SplitCard items={favPlates} buttonText= {featuredCardButtonText}/>
        <Footer/>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
