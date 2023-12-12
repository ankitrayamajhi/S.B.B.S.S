
import React from 'react';
import '../assets/css/HomeStyle.css'
import OurTeam from './OurTeam';
import Contact from './Contact';
import About from './About';

const Home = () => {
  return (
    <div className='home-section'>
      
      <About/>
      <br></br>

      <OurTeam />
      <br></br>
    

      <br></br>
      <Contact/>
    </div>
  );
};

export default Home;
