import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const approveduser = { username: 'test@test.com', password: '1234' };

  const loginHandling = () => {
    if (approveduser.username === username && approveduser.password === password) {
      setErrorMessage('');
      navigate(`/home`);
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const updateSignupData = (field:string, value:string) => {
    setSignupData({
      ...signupData,
      [field]: value,
    });
  };

  function navigateLogin(
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      if (
        event.type === 'click' ||
        (event as React.KeyboardEvent<HTMLInputElement>).key === 'Enter'
      ) {
        setErrorMessage('Please fill out all input fields.');
      }
    } else {
      loginHandling();
    }
  }

  return (
    <div>
        <form className='log_form'>
          <h1 className='form_heading'>Sign In</h1>
          <label htmlFor='username'>Email</label>
          <input
            data-test='username'
            tabIndex={0}
            type='text'
            placeholder='Enter your email...'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            data-test='password'
            tabIndex={0}
            type='password'
            placeholder='Enter password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='log_button'
            tabIndex={0}
            data-test='submit-button'
            type='submit'
            value='submit'
            onClick={(event) => navigateLogin(event)}
          >
            Sign in
          </button>{' '}
          <div className='big_break'></div>
          {errorMessage && (
            <h2 data-test='search-error-message' className='error-message'>
              {errorMessage}
            </h2>
          )}
        </form>
    </div>
  );
};

export default LoginForm;
