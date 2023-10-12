import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Carousel />
    </ThemeProvider>
  );
}

export default App;
