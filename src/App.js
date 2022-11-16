import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home'
import Lexicon from './components/Lexicon/Lexicon';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lexicon" element={<Lexicon />} />  
        </Routes> 
      </BrowserRouter>
    </div>
  );
}


export default App;