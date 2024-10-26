import React from 'react';
import '../styles/LoginForm.css'; // Import the external CSS
import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.bundle"

const LoginForm = () => {
  return (
    <div className='login-container'>
      {/* Left section with heading and description */}
      <div className='left-section'>
        <h1>facebook</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>

      {/* Right section with login form */}
      <div className='right-section'>
        <form className='login-form'>
          <input type="text" placeholder="Email or phone number" className='input-field' />
          <input type="password" placeholder="Password" className='input-field' />
          <button type="submit" className='login-btn'> 
            <Link className='login' to="/fb-page">Log In</Link>
          </button>
          <Link to="/" className='forgot-password'>Forgotten password?</Link>
          <hr />
          <button className='create-account-btn'>
            <Link to="/create-new-acc">Create a new account</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
