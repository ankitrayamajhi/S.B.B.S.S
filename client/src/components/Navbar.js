import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/NavbarStyle.css';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const toggleNewsDropdown = () => {
    if (!newsDropdown) {
      setNewsDropdown(true);
    } else {
      setNewsDropdown(false);
      navigate('/News');
    }
  };

  return (
    <>
      <nav>
        <img src={logo} className="logo" alt="Logo" />
        <div>
          <ul
            id="navbar"
            className={clicked ? 'active' : ''}
            onClick={handleClick}
          >
            <li>
              <Link to="/OurTeam">Home</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/OurTeam">Our Team</Link>
            </li>
            <li>
              <a
                onClick={toggleNewsDropdown}
                className={newsDropdown ? 'active' : ''}
              >
                News
              </a>
              {newsDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Notice">Notice</Link>
                  </li>
                  <li>
                    <Link to="/Results">Results</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i
            id="bar"
            className={clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
