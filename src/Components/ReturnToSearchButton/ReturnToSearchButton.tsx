import { useNavigate } from 'react-router-dom';

const ReturnToSearchButton = () => {

  const navigate = useNavigate()
  const handleReturnClick = () => {
    navigate('/home')
  }
  return (
    <div className='return-btn-box'>
      <button onClick={handleReturnClick}>Return to Search</button>
    </div>
  )
}

export default ReturnToSearchButton