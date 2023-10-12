import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import HorizontalScroll from './components/HorizontalScroll'
import Featured from './components/Featured'
import Drinks from './components/Drinks';
function App() {
  const [featuredTitle, setFeaturedTitle] = useState<string>("Davelle’s Original Uni Pasta");
  const [featuredCardDescription, setFeaturedCardDescription] = useState<string>(
    "An uni (sea urchin) lover’s heaven filled with umami. Limited quantity available daily!"
  );
  const [featuredCardButtonText, setFeaturedCardButtonText] = useState<string>("Read More");
  const [featuredCardImageUrl, setFeaturedCardImageUrl] = useState<string>("your-image-url.jpg");
  return (
    <div className="App">
      <HorizontalScroll/>
      <Featured title = {featuredTitle} description = {featuredCardDescription} buttonText= {featuredCardButtonText} imageUrl= {featuredCardImageUrl}/>
      <Drinks/>
      <Footer/>
    </div>
  );
}

export default App;
