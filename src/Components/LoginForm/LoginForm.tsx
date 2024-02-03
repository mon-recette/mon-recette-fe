import { useState } from "react"
import { Link } from "react-router-dom"


const LoginForm = () => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
    
    function navigateLogin(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) {
        event.preventDefault()
        if (username === '' || username === ' ' || password === '' || password === ' ') {
            //inputElement as click events
          if  (event.type === "click" || (event as React.KeyboardEvent<HTMLInputElement>).key === 'Enter') {
            setErrorMessage('Please fill out all input fields.')
          }
        } else {
            //button for keyboard events
          if (event.type === "click" || (event as React.KeyboardEvent<HTMLInputElement>).key === 'Enter' ) {
            setErrorMessage('')
            // navigate(`/homepage`)
          }
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
      type="text"
      placeholder="Enter password..."
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      ></input>
    
    <Link to='/home'>
        <button tabIndex={0} data-test='submit-button' type="submit" value='submit'>Sign in</button>
    </Link>

    {errorMessage && <h2 data-test='search-error-message' className='error-message'>{errorMessage}</h2>}
    </form>
  )
}

export default LoginForm
