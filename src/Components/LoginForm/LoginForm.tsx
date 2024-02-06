import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { getUsers } from "../apiCalls"

const LoginForm = () => {
    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    const approvedUsers = [
      { username: 'amy@turing.edu', password: 'kitties' },
      { username: 'jen@gmail.com', password: 'bunnies' },
      { username: 'nate@gmail.com', password: 'llamas' },
      { username: 'allan@gmail.com', password: 'dogs' },
      { username: 'sooyung@gmail.com', password: 'birds' }
  ];

    const loginUsers = (username: string, password: string) => {
      const user = approvedUsers.find(user => user.username === username && user.password === password);
      return user !== undefined;
    }  
    
    const loginHandling = () => {
      if (loginUsers(username, password)) {
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
    <form>
      <input
      data-test='username'
      tabIndex={0}
      type="text"
      placeholder="Enter username or email..."
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      ></input>

    <input
      data-test='password'
      tabIndex={0}
      type="password"
      placeholder="Enter password..."
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      ></input>

     <button tabIndex={0} data-test='submit-button' type="submit" value='submit' onClick={(event) => navigateLogin(event)}>Sign in</button>

    {errorMessage && <h2 data-test='search-error-message' className='error-message'>{errorMessage}</h2>}
    </form>
  )
}

export default LoginForm
