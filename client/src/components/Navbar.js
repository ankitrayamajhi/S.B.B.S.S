import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/NavbarStyle.css';
import { Link, useNavigate } from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false, newsDropdown: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  toggleNewsDropdown = () => {
    this.setState({ newsDropdown: !this.state.newsDropdown });
  };

  render() {
    return (
      <>
        <nav>
          <img src={logo} className="logo" alt="Logo" />
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? 'active' : ''}
              onClick={this.handleClick}
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
                  onClick={this.toggleNewsDropdown}
                  className={this.state.newsDropdown ? 'active' : ''}
                >
                  News
                </a>
                {this.state.newsDropdown && (
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
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
