

import './Contact.css';
import Logo from '../../assets/Logos/Logo.svg';
import { Link } from 'react-router';

function Contact() {
  return (
    <section
      className="svac-contact"
      id="contact"
      aria-labelledby="svac-contact-title"
    >
      <div className="svac-contact__layout">
        <div className="svac-contact__content">
          <p className="svac-contact__eyebrow">SVAC CARS</p>

          <h2 className="svac-contact__title" id="svac-contact-title">
            Свяжитесь
            <br />
            с нами
          </h2>

          <Link className="svac-contact__button" to="/contact">
            <span>Контакты</span>
          </Link>
        </div>

        <div className="svac-contact__brand">
          <img
            className="svac-contact__logo"
            src={Logo}
            alt="SVAC Cars"
          />

          <p className="svac-contact__slogan">
            Найдём лучший автомобиль
            <br />
            под ваш бюджет.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
