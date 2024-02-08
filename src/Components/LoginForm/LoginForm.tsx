import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { getUsers } from "../apiCalls"

const LoginForm = () => {
    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    const approveduser = 
    // [ //will be users for part 2
      { username: 'test@test.com', password: '1234' }
      // { username: 'jen@gmail.com', password: 'bunnies' },
      // { username: 'nate@gmail.com', password: 'llamas' },
      // { username: 'allan@gmail.com', password: 'dogs' },
      // { username: 'sooyung@gmail.com', password: 'birds' }
  // ];
    // const loginUsers = (username: string, password: string) => {
    //   const user = approveduser.find(user => user.username === username && user.password === password);
    //   return user !== undefined;
    // }  
    
    const loginHandling = () => {
      // if (loginUsers(username, password))
      if (approveduser.username === username && approveduser.password === password) {
        setErrorMessage('');
        navigate(`/home`);
      } else {
        setErrorMessage('Invalid username or password.');
      }
    }
    function navigateLogin(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) {
        event.preventDefault()
        if (username === '' || username === ' ' || password === '' || password === ' ') {
          if  (event.type === "click" || (event as React.KeyboardEvent<HTMLInputElement>).key === 'Enter') {
            setErrorMessage('Please fill out all input fields.')
          }
        } else {
          loginHandling()
          // if (event.type === "click" || (event as React.KeyboardEvent<HTMLInputElement>).key === 'Enter' ) {
          //   setErrorMessage('')
          //   navigate(`/home`)
          // }
        }
      }
  
  return (
    <form className="log_form">
      <h1 className="form_heading">Sign In</h1>
      <label htmlFor="username">Email</label>
      <input
      data-test='username'
      tabIndex={0}
      type="text"
      placeholder="Enter your email..."
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      ></input>

    <label htmlFor='password'>Password</label>
    <input
      data-test='password'
      tabIndex={0}
      type="password"
      placeholder="Enter password..."
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      ></input>

     <button className='log_button' tabIndex={0} data-test='submit-button' type="submit" value='submit' onClick={(event) => navigateLogin(event)}>Sign in</button>

    {errorMessage && <h2 data-test='search-error-message' className='error-message'>{errorMessage}</h2>}
    </form>
  )
}

export default LoginForm
