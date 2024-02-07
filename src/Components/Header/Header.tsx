import React from 'react';
import SmallLogo from '../../Images /Small-logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header" >
      <Link to='/home'>
        <img src={SmallLogo} alt="small-mon-recette-logo" className="small-logo"/>
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
