import { useNavigate } from 'react-router-dom';
import './ReturnToSearchButton.css'
const ReturnToSearchButton = () => {

  const navigate = useNavigate()
  const handleReturnClick = () => {
    navigate('/home')
  }
  return (
    <div className='return-btn-box'>
      <button className='return-to-search-btn' onClick={handleReturnClick}>Return to Search</button>
    </div>
  )
}

export default ReturnToSearchButton