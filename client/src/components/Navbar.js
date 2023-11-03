import React, { Component } from 'react';
import logo from '../assets/logo.png';
import './NavbarStyle.css';

class Navbar extends Component {
  state = { clicked: false }
handleClick = () =>{
  this.setState({clicked: ! this.state.clicked})
}
  render() {
    return (
      <>
        <nav>
          <img src={logo} className="logo" alt="Logo" />
{/* <h1> SHREE BUDDHA BHAWANI SECONDARY SCHOOL <br/>
Khandadevi-6, Makadum
  
</h1> */}
          <div>
            <ul id="navbar"
            className={this.state.clicked ? "#navbar active" :"#navbar"}
            >
              <li><a className="active" href="index.html">Home</a></li>
              <li><a href="index.html">About Us</a></li>
              <li><a href="index.html">Our Staff</a></li>
              <li><a href="index.html">News</a></li>
              <li><a href="index.html">Contact</a></li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
