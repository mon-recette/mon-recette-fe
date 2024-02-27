import Logo from '../../Images /Main-logo.png'
import './MainLogo.css'

const MainLogo = () => {
  return (
    <img src={Logo} className='main-logo' aria-label="Mon Recette website logo" alt='Mon Recette website logo'/>
  )
}

export default MainLogo