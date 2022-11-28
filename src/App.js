import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './routes/HomePage'
import Lexicon from './Lexicon/Lexicon';
import Calculator from './calculator/Calculator';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path="/lexicon" element={<Lexicon />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}


export default App;