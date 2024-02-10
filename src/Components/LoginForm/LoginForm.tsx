import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getUsers } from "../apiCalls"

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const approveduser = { username: 'test@test.com', password: '1234' };

  const loginHandling = () => {
    if (
      approveduser.username === username &&
      approveduser.password === password
    ) {
      setErrorMessage('');
      navigate(`/home`);
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };
  function navigateLogin(
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) {
    event.preventDefault();
    if (
      username === '' ||
      username === ' ' ||
      password === '' ||
      password === ' '
    ) {
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
    <form className='log_form'>
      <h1 className='form_heading'>Sign In</h1>
      <label htmlFor='username'>Email</label>
      <input
        data-test='username'
        tabIndex={0}
        type='text'
        placeholder='Enter your email...'
        value={username}
        onChange={e => setUsername(e.target.value)}></input>
      <label htmlFor='password'>Password</label>
      <input
        data-test='password'
        tabIndex={0}
        type='password'
        placeholder='Enter password...'
        value={password}
        onChange={e => setPassword(e.target.value)}></input>
      <button
        className='log_button'
        tabIndex={0}
        data-test='submit-button'
        type='submit'
        value='submit'
        onClick={event => navigateLogin(event)}>
        Sign in
      </button>{' '}
      <div className='big_break'></div>
      {errorMessage && (
        <h2 data-test='search-error-message' className='error-message'>
          {errorMessage}
        </h2>
      )}
    </form>
  );
};

export default LoginForm;
