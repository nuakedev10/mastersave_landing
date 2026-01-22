import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Research from './pages/Research';
import Prototype from './pages/Prototype';
import Team from './pages/Team';
import CallToAction from './pages/CallToAction';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/research" element={<Research />} />
          <Route path="/prototype" element={<Prototype />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<CallToAction />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;