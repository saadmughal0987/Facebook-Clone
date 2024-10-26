import React from 'react';
import '../styles/SignupForm.css';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //
    alert("Sign up successful!"); 
  };

  return ( 
    <div style={{ textAlign: 'center', marginBottom: '5px', marginTop: '10px' }}>
      {/* Facebook Heading */}
      <div className='heading'>
        <h1 style={{ color: '#1877f2', fontSize: '50px', marginBottom: '20px' }}>facebook</h1>
      </div>

      <div className="signup-container" style={{ marginTop: '20px' }}>
        <h2>Create a new account</h2>
        <p>It's quick and easy</p>
        <hr />
        
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group name-group">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First name" 
              required 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Surname" 
              required 
            />
          </div>

          {/* Date of Birth Section with label */}
          <div className="form-group" style={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
            <label className='label' htmlFor="dob">Date of Birth?</label>
          </div>
          <div className="form-group dob-group">
            <select name="dobDate" required>
              <option value="">Date</option>
              {[...Array(31).keys()].map((day) => (
                <option key={day + 1} value={day + 1}>{day + 1}</option>
              ))}
            </select>
            
            <select name="dobMonth" required>
              <option value="">Month</option>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                <option key={index + 1} value={index + 1}>{month}</option>
              ))}
            </select>
            
            <select name="dobYear" required>
              <option value="">Year</option>
              {[...Array(new Date().getFullYear() - 1899).keys()].map((year) => (
                <option key={year + 1900} value={year + 1900}>{year + 1900}</option>
              ))}
            </select>
          </div>
          
          {/* Gender Section with checkboxes */}
          <div className="form-group">
            <label className='label' htmlFor="gender" style={{ width: '100%', display: 'flex', justifyContent: 'start' }}>Gender?</label>
          </div>
          <div className="form-group gender-group">
            <label style={{ display: 'flex', width: '100px', alignItems: 'center', padding: "5px 10px", justifyContent: 'space-between', border: '1px solid grey', borderRadius: '3px', borderColor: 'lightgray' }}>
             <div style={{display:'block'}}> Female</div>
              <input style={{display:'block', border: '3px solid red '}}  type="checkbox" name="gender" value="Female" />
            </label>
            <label style={{ display: 'flex', width: '100px', alignItems: 'center', padding: "5px 10px", justifyContent: 'space-between', border: '1px solid grey', borderRadius: '3px', borderColor: 'lightgray' }}>
              <div>Male</div>
              <input type="checkbox" name="gender" value="Male" />
            </label>
            <label style={{ display: 'flex', width: '100px', alignItems: 'center', padding: "5px 10px", justifyContent: 'space-between', border: '1px solid grey', borderRadius: '3px', borderColor: 'lightgray' }}>
              <div>Custom</div>
              <input type="checkbox" name="gender" value="Custom" />
            </label>
          </div>

          <div className="form-group">
            <input className='mail' type="email" name="email" placeholder="Mobile number or email address" required />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="New password" required />
          </div>
          <div className='Para' style={{ width: '100%', textAlign: 'start' }}>
           <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
          </div>
          <div className='Para' style={{ width: '100%', textAlign: 'start' }}>
            <p>By clicking Sign Up, you agree to our Terms, Privacy Policy, and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>

          <div>
            <a style={{ color: '#1877f2', fontSize: 'larger', cursor: 'pointer' }}>
              
              <Link style={{textDecoration:'none',color:'#1877f2'}} to="/">
              Already have an account?
              </Link>

            
              
              </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
