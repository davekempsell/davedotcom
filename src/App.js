import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header'
import  Projects  from './components/Projects';
import About from './components/About'

function App() {

  return (
    <div className="app">
      {/* {Header()} */}
      <BrowserRouter>
        {Header()}
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />  
          <Route path="/about" element={<About />} />
        </Routes> 
      </BrowserRouter>
      
    </div>
  );
}


export default App;