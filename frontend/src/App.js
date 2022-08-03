import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { Router } from 'express';


function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Router>
<Routes>
    <Home/>
    </Routes>
    </Router>
    </div>
    </BrowserRouter>
   
  )
}

export default App;
