import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header" >
      <Link to='/home' aria-label="Home">
        <li className='header_logo'>Mon Recette</li>
      </Link>
        <nav className="navbar">
          <ul className='nav_links'>
            <Link to='/saved' aria-label="Saved Recipes">
              <li>Saved Recipes</li>
            </Link>
            <Link to='/' aria-label="Logout">
              <li>Logout</li>
            </Link>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
