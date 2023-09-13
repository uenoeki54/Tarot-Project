import { Link } from 'react-router-dom';
import banner from '../assets/banner.avif';

function Header() {
  return (
    <header>
      <img className="banner" src={banner} alt="banner tarot project"></img>
      <nav>
        <Link to="/"> Accueil </Link>
        <Link to="/apropos"> A propos </Link>
      </nav>
    </header>
  );
}

export default Header;
