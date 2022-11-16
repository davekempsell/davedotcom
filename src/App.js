import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './NewApp.css';
import Home from './components/redesign/Home'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} />  
          <Route path="/about" element={<About />} /> */}
        </Routes> 
      </BrowserRouter>
    </div>
  );
}


export default App;