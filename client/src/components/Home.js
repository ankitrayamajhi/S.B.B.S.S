
import React from 'react';
import Navbar from './Navbar';
import OurTeam from './OurTeam';
import Footer from './Footer';
import About from './About';

const Home = () => {
  return (
    <div>
      <Navbar />
      <About/>
      <br></br>
    

      <br></br>
      <OurTeam />
    
      <Footer />
    </div>
  );
};

export default Home;
