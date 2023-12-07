// import React from 'react';
import '../assets/css/ContactStyle.css';
import logo from '../assets/img/logo.png';
const Contact = () => {
  return (
    <div>
    
        <div className="Contact-section">
        <div className="sec-title centered">
        <div className="title">Get in Touch</div>
        <div className="separator">
          <span></span>
        </div>
      </div>
          <div className="container">
            <div className="Contact-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-map-marker-alt" />
                    <div className="cta-text">
                      <h4>Find us</h4>
                      <span>Khandadevi-6, Makadum, Ramechhap</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-phone" />
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span>9876543210 0</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open" />
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>mail@info.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Contact-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="Contact-widget">
                    <div className="Contact-logo">
                      <a href="index.html">
                        <img src={logo} className="logo" alt="logo" />
                      </a>
                    </div>
                    <div className="Contact-text">
                      <p>
                        Lorem ipsum dolor sit amet, consec tetur adipisicing
                        elit, sed do eiusmod tempor incididuntut consec tetur
                        adipisicing elit, Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="Contact-social-icon">
                      <span>Follow us</span>
                      <a href="https://www.facebook.com/profile.php?id=100063768624765">
                        <i className="fab fa-facebook-f facebook-bg" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter twitter-bg" />
                      </a>
                      <a href="#">
                        <i className="fab fa-google-plus-g google-bg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="Contact-widget">
                    <div className="Contact-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="Contact-widget">
                    <div className="Contact-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="Contact-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button>
                          <i className="fab fa-telegram-plane" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
        
        </div>
    </div>
  );
};

export default Contact;
