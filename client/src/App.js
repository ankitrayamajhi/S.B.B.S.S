import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import OurTeam from './components/OurTeam';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
