import React from 'react';
import Home from './page/Home'
import NavBar from './components/NavBar';
import AboutUs from './page/AboutUs';
import Contact from './page/Contact'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Testimonial from './page/Testimonial';

function App() {
    return (
      <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/vitality-market/AboutUs' element={<AboutUs/>}></Route>
          <Route path='/vitality-market/Testimonial' element={<Testimonial/>}></Route>
          <Route path='/vitality-market/Contact' element={<Contact/>}></Route>
          
        </Routes>  
      </> 
    );
}

export default App;