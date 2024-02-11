import { useNavigate } from 'react-router-dom'
import './ErrorPage.css'
import Header from '../Header/Header'
import MainLogo from '../MainLogo/MainLogo'

const ErrorPage = () => {
const navigate = useNavigate()
 
const handleBackToLogin = () => {
  navigate('/')
}

  return (
    <div className='error-page'>
      <Header/>
      <MainLogo/>
    <h2>Oops! Something went wrong!</h2>
    <button className='back-btn' onClick={handleBackToLogin}>Go Back to Login!</button>
    </div>
  )
}

export default ErrorPage 