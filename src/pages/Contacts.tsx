

import './Contacts.css';

import Arrow from '../assets/Logos/Arrow.svg';
import phoneIcon from '../assets/Logos/Phone-icon.png';

import TelegramIcon from '../assets/Logos/telegram.svg';
import WhatsAppIcon from '../assets/Logos/whatsapp.svg';
import FacebookIcon from '../assets/Logos/facebook.svg';
import InstagramIcon from '../assets/Logos/instagram.svg';
import DocIcon from '../assets/Logos/doc.svg';

const contactLinks = [
  {
    label: 'Telegram',
    href: 'https://t.me/svaccars_de',
    icon: TelegramIcon,
    platform: 'telegram',
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=4915158802065&text=%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D1%96%D1%8F+%D0%BF%D0%BE+%D0%B0%D0%B2%D1%82%D0%BE...&type=phone_number&app_absent=0',
    icon: WhatsAppIcon,
    platform: 'whatsapp',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/SVACcarsde/61594670771268/',
    icon: FacebookIcon,
    platform: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/svaccars.de/',
    icon: InstagramIcon,
    platform: 'instagram',
  },
  {
    label: 'Impressum | Datenschutz',
    href: 'https://docs.google.com/document/d/1ELakQIuErZiF1uZXYXX7CmP0MIF0jXpv/edit?pli=1',
    icon: DocIcon,
    platform: 'legal',
  },
];

function Contacts() {
  const phoneNumber = '+49 151 58 802 065';

  return (
    <section
      className="contacts"
      aria-labelledby="contacts-title"
    >
      <div className="contacts__layout">
        <div className="contacts__content">
          <p className="contacts__eyebrow">
            SVAC CARS · CONTACTS
          </p>

          <h1 className="contacts__title" id="contacts-title">
            Будем
            <br />
            на связи
          </h1>

          <p className="contacts__description">
            Есть вопросы по подбору или покупке автомобиля в Германии?
            Напишите нам в удобном для вас мессенджере или найдите нас
            в социальных сетях. Поможем разобраться и ответим на ваши вопросы.
          </p>

          <div className="contacts__phone-block">
            <h2 className="contacts__phone-title" id="phone-title">
              Наш телефон
            </h2>

            <a
              className="contacts__phone"
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              aria-labelledby="phone-title"
            >
              <img
                className="contacts__phone-icon"
                src={phoneIcon}
                alt=""
                aria-hidden="true"
              />

              <span>{phoneNumber}</span>
            </a>
          </div>
        </div>

        <nav
          className="contacts__links"
          aria-label="contacts and social links"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className={`contacts__button contacts__button--${link.platform}`}
              href={link.href}
              target={link.href.startsWith('https://') ? '_blank' : undefined}
              rel={link.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
            >
              <span className="contacts__button-content">
                {link.icon && (
                  <span
                    className="contacts__social-icon"
                    style={{
                      maskImage: `url("${link.icon}")`,
                      WebkitMaskImage: `url("${link.icon}")`,
                    }}
                    aria-hidden="true"
                  />
                )}

                <span className="contacts__button-label"
                >{link.label}</span>
              </span>

              <span className="contacts__button-arrow" aria-hidden="true">
                <img src={Arrow} alt="" />
              </span>
            </a>
          ))}

        </nav>
      </div>
    </section>
  );
}

export default Contacts;
