import React from 'react';
import './App.scss';
import Header from './shared/header/header';
import HomeSlider from './shared/slider/slider';
import Home from './features/home/home';

function App() {
  return (
      <>
        <HomeSlider />
        <Header />
        <Home />
      </>
  );
}

export default App;
