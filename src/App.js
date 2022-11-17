import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Calculator from './calculator/Calculator';
import Home from './components/Home'
import Lexicon from './Lexicon/Lexicon';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lexicon" element={<Lexicon />} />
          <Route path="/calculator" element={<Calculator />} /> 
        </Routes> 
      </BrowserRouter>
    </div>
  );
}


export default App;