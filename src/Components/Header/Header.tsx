import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header" >
      <Link to='/home'>
        <li className='header_logo'>Mon Recette</li>
      </Link>
        <nav className="navbar">
          <ul className='nav_links'>
            <Link to='/saved'>
              <li>Saved Recipes</li>
            </Link>
            <Link to='/'>
              <li>Logout</li>
            </Link>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
