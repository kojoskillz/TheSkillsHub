import React from 'react'
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar/nav';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
        <Navbar />
        <Home />
        <Login/>
        <Footer />

    </>
  )
}

export default App
