import './BackToSearchBtn.css'
import { Link } from 'react-router-dom'

const BackToSearchBtn = () => {
  return (
   <Link to='/home'>
    <button className="back-to-search-btn" aria-label="Back to Search">Back to Search</button>
   </Link>
  )
}

export default BackToSearchBtn
