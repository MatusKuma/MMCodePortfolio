import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo_mmcode.png';

function Navbar() {
  return (
    <div className='Nav'>
      <div className="Nav-container">
        <Link to="/" className="Nav-logo">
          <img src={logo} alt="Logo MMCode" />
          <span className="Nav-logo-text">MMCode</span>
        </Link>
        <ul className="Nav-links">
          <li><Link to="/">Domov</Link></li>
          <li><Link to="/Projects">Naše projekty</Link></li>
          <li><Link to="/Contacts">Kontakt</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
