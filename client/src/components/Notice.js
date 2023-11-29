import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/NoticeStyle.css';

const Notice = () => {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate(); // Initialize navigate

  const closePopup = () => {
    setShowPopup(false);
    // Use navigate to navigate to the home page
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className='notice'>
    <div className={`popup-wrapper ${showPopup ? 'show' : 'hide'}`}>
      <div className="popup-box entry">
        <span className="close-btn" onClick={closePopup}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="popup-text show">
          <div className="whole">
            <p className="springgreen">Shree Buddha Bhawani Secondary School</p>
            <h1>Latest Update!</h1>
            <p>Posted Date: 2080 / 12 / 9</p>
          </div>

          <div className="whole">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              consectetur adipisicing elit, Lorem ipsum dolor sit amet.
            </p>
            <a href="#">Thank you !</a>
            <p>*Terms and Conditions Apply</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Notice;
