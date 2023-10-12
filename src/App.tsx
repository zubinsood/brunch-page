import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import HorizontalScroll from './components/HorizontalScroll'
import Featured from './components/Featured'
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Drinks from './components/Drinks';

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

  return (
    <ThemeProvider>
      <NavBar />
      <Carousel />
      <HorizontalScroll items={scrollItems}/>
      <Featured title = {featuredTitle} description = {featuredCardDescription} buttonText= {featuredCardButtonText} imageUrl= {featuredCardImageUrl}/>
      <Drinks />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
