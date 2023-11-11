import React, { useState } from 'react';
import '../assets/css/ResultCheckStyle.scss';


const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [grade, setGrade] = useState('');
  const [address, setAddress] = useState('');
  const [parentname, setParentName] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState(''); // Assuming you want to capture the selected gender
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Performance Summary Form</h2>
        </div>
        <div className="row clearfix">
          <div className="">
            <form onSubmit={handleSubmit}>
            <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field">
                    <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field">
                    <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="input_field">
                <span><i aria-hidden="true" className="fa fa-graduation-cap"></i></span>
                  <input
                   type="text"
                   name="Grade"
                   placeholder="Grade"
                   value={grade}
                   onChange={(e) => setGrade(e.target.value)}
                   required
                 />
            </div>


             <div className="input_field">

              <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                <input
                 type="text"
                  name="Contact"
                  placeholder="Contact"
                 value={contact}
                 onChange={(e) => setContact(e.target.value)}
                 required
                />
                </div>

              <div className="input_field">
                    <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input
                      type="text"
                      name="Parent's Name"
                      placeholder="Parent's Name"
                      value={parentname}
                      onChange={(e) => setParentName(e.target.value)}
                    />
                  </div>

              <div className="input_field">

              <span><i aria-hidden="true" className="fa fa-map-marker"></i></span>
                <input
                 type="text"
                  name="Address"
                  placeholder="Address"
                 value={address}
                 onChange={(e) => setAddress(e.target.value)}
                 required
                />
                </div>

                <div className="input_field">

              <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                <input
                 type="text"
                  name="Contact"
                  placeholder="Contact"
                 value={contact}
                 onChange={(e) => setContact(e.target.value)}
                 required
                />
                </div>




              <div className="input_field">

                <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input_field">
                <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
          
    
              <div className="input_field radio_option">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                <label htmlFor="female">Female</label>
              </div>
            
              <div className="input_field checkbox_option">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                />
                <label htmlFor="agreeTerms">I agree with terms and conditions</label>
              </div>
              <input className="button" type="submit" value="Check" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
