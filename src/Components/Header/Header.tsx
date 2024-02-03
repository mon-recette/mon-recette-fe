import SmallLogo from '../../Images /Small-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img src={SmallLogo} alt="small-mon-recette-logo" />
      {/* <Link to="/saved"> */}
        <button className="saved-recipes-btn">Saved Recipes</button>
      {/* </Link> */}
      {/* <Link to="/"> */}
        <button className="log-out-btn">Logout</button>
      {/* </Link> */}
    </header>
  );
};

export default Header;
