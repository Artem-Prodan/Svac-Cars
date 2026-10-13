
import { NavLink } from 'react-router';
import Logo from "../../assets/Logos/SVAC-H-logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="svac-header">

      <NavLink
        to="/"
        className="svac-header__logo"
        aria-label="SVAC Cars — Home"
      >
        <img src={Logo} alt='SVAC CARS'/>
      </NavLink>

      <nav className="svac-header__nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>

    </header>
  );
}

export default Header;