import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/landing/Landing'; // Supondo que você tenha uma página Home
import About from './pages/about/About'; // Supondo que você tenha uma página About
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log('Toggling theme...'); // Verifique se este log aparece
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('New theme:', newTheme); // Verifique o novo tema no console
      return newTheme;
    });
  };

  return (
      <div className={theme}>
        <Router>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/portfolio" element={<Portfolio theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
          </Routes>
          <Footer theme={theme} />
        </Router>
      </div>
  );
}

export default App;
