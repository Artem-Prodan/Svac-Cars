
import './Question.css';
import Logo from '../../assets/Logos/Logo.svg';
import { Link } from 'react-router';

function Question() {
  return (
    <section
      className="svac-question"
      id="contact"
      aria-labelledby="svac-question-title"
    >
      <div className="svac-question__layout">
        <div className="svac-question__content">
          <p className="svac-question__eyebrow">SVAC CARS</p>

          <h2 className="svac-question__title" id="svac-question-title">
            Остались вопросы?
            <br />
          </h2>

          <p className="svac-question__description">
            Возможно ответ на ваш вопрос
            <br />
            уже есть в разделе с частыми вопросами.
          </p>

          <Link className="svac-question__button" to="/questions">
            <span>Вопросы</span>
          </Link>
        </div>

        <div className="svac-question__brand">
          <img
            className="svac-question__logo"
            src={Logo}
            alt="SVAC Cars"
          />
        </div>

      </div>
    </section>
  );
}

export default Question;
