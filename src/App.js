import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage.js';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Header />}></Route>
          <Route path="/menu" element={<Main />}></Route>
          <Route path="/reservations" element={<BookingPage />}></Route>
          <Route path="/order" element={<Main />}></Route>
          <Route path="/login" element={<Header />}></Route>
        </Routes>

      
      </div>

    </Router>
  
  );
}

export default App;
