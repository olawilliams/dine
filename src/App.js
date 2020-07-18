import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage-component';
import Reservation from './pages/reservation/reservation-component';
import Header from './components/header/header-component';
import Footer from './components/footer/footer-component'

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      
      <Footer />
    </div>
  );
}

export default App;
