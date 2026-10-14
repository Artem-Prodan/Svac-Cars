
import Logo from '../../assets/Logos/Logo.svg';
import phoneIcon from '../../assets/Logos/Phone-icon.png';
import './Footer.css';

function Footer() {
  const phoneNumber = '+49 151 58 802 065';

  return (
    <footer className="svac-footer">
      <div className="svac-footer__layout">
        <a
          className="svac-footer__logo"
          href="/"
          aria-label="SVAC Cars — Home"
        >
          <img src={Logo} alt="SVAC Cars" />
        </a>

        <a
          className="svac-footer__phone"
          href={`tel:${phoneNumber}`}
          aria-label={`Позвонить: ${phoneNumber}`}
        >
          <img
            className="svac-footer__phone-icon"
            src={phoneIcon}
            alt="phone"
          />

          <span>{phoneNumber}</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;