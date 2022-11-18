import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home'
import Lexicon from './Lexicon/Lexicon';
import Calculator from './calculator/Calculator';
import GmsCalculator from './calculator/GmsCalculator';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lexicon" element={<Lexicon />} />
          <Route path="/calculator" element={<Calculator />} /> 
          <Route path="/gms-calculator" element={<GmsCalculator />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}


export default App;