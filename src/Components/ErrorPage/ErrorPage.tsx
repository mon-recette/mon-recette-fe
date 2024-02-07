import Ratatouille from '../../Images /Ratatouille.jpeg'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
const navigate = useNavigate()
 
const handleBackToLogin = () => {
  navigate('/')
}

  return (
    <div className='error-page'>
    <img src={Ratatouille} alt="ratatouille-image"/>
    <h2>Oops! Something went wrong!</h2>
    <button className='back-btn' onClick={handleBackToLogin}>Go Back to Login!</button>
    </div>
  )
}

export default ErrorPage 