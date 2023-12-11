import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import OurTeam from './components/OurTeam';
import Home from './components/Home';
import About from './components/About';
import Notice from './components/Notice';
import Footer from './components/Footer'
import Contact from './components/Contact';
import Login from './components/Admin/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
