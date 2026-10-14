
import './Contact.css';
import Logo from '../../assets/Logos/Logo.svg';

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__layout">
        <div className="contact__content">
          <p className="contact__eyebrow">SVAC CARS</p>

          <h2 className="contact__title" id="contact-title">
            Свяжитесь
            <br />
            с нами
          </h2>

          <a className="contact__button" href="mailto:YOUR_EMAIL">
            <span>Contact</span>
          </a>
        </div>

        <div className="contact__brand">
          <img
            className="contact__logo"
            src={Logo}
            alt="SVAC Cars"
          />

          <p className="contact__slogan">
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