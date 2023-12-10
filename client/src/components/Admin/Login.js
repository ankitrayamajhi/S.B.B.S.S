import '../../assets/css/Admin/LoginStyle.css';
import React, { useState } from 'react';
function SlideNavbar() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    console.log('Signup successful');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    console.log('Login successful');
  };

  return (
    <div className='login-container'>
    <div className="main-login">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={handleSignup}>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input
            type="text"
            name="txt"
            placeholder="User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SlideNavbar;
