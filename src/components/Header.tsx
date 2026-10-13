
import { NavLink } from 'react-router';

function Header() {
  return (
    <header className="svac-header">
      <a className="svac-header__logo" href="/">
        SVAC CARS
      </a>

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