import Ratatouille from '../../Images /Ratatouille.jpeg'

const ErrorPage = () =>{
  return (
    <div className='error-page'>
    <img src={Ratatouille} alt="ratatouille-image"/>
    <h2>Oops! Something went wrong!</h2>
    <button className='back-btn'>Go Back!</button>
    </div>
  )
}

export default ErrorPage 