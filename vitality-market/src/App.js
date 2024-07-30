import React from 'react';
import Home from './page/Home'
import NavBar from './components/NavBar';
import AboutUs from './page/AboutUs';
import Contact from './page/Contact'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './page/Products';
import Cart from './page/Cart'
import Account from './page/Account'
import Footer from './components/Footer';

function App() {
    return (
      <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/vitality-market/AboutUs' element={<AboutUs/>}></Route>
          <Route path='/vitality-market/Products' element={<Products/>}></Route>
          <Route path='/vitality-market/Contact' element={<Contact/>}></Route>
          <Route path='/vitality-market/Cart' element={<Cart/>}></Route>
          <Route path='/vitality-market/Account' element={<Account/>}></Route>
        </Routes>  
        <Footer/>
      </> 
    );
}

export default App;