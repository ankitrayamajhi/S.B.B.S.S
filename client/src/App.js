import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import OurTeam from './components/OurTeam';
import Notice from './components/Notice';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/" element={<Home />} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
