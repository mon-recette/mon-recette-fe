import React from 'react';
import SmallLogo from '../../Images /Small-logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header" >
      <img src={SmallLogo} alt="small-mon-recette-logo" className="small-logo"/>
        <nav className="navbar">
          <ul className='nav_links'>
            <li><a href="/saved">Saved Recipes</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
