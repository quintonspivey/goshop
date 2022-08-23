import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { BrowsweRouter,Router,Routes } from 'express';



function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Router>
<Routes>
    <Route path="/" element={Home}/>
    
    <Route path="/product" element={ProductPage}/>
    </Routes>
    </Router>
    </div>
    </BrowserRouter>
   
  )
}

export default App;
