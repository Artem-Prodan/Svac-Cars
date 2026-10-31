
import { useState } from 'react';
import './Questions.css';
import Arrow from '../assets/Logos/Arrow.svg';
import { Link } from 'react-router';

type Question = {
  id: number;
  question: string;
  answer: string;
  link?: {
    text: string;
    href: string;
  };
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Сколько стоят наши услуги?',
    answer:
      'Стоимость наших услуг составляет 3-5% от стоимости автомобиля НЕТТО. Более подробную информацию можете узнать по ссылке ниже.',
    link: {
      text: "Подробнее",
      href: "/guides/pricing",
    }
  },
  {
    id: 2,
    question: 'Помогаем ли мы с документами?',
    answer:
      'Расскажем, какие документы необходимы в вашей ситуации и какую помощь можно получить на каждом этапе. В случае утери, поможем оформить дубликаты немецких документов на автомобиль — Zulassungsbescheinigung Teil I (малый бриф) и Teil II (большой бриф). Поможем зарегистрировать автомобиль дистанционно в любом городе Германии.',
  },
  {
    id: 3,
    question: 'Почему автомобили на аукционах дешевле?',
    answer:
      'Значительную часть автомобилей на европейских аукционах составляют машины, ранее принадлежавшие лизинговым компаниям и использовавшиеся юридическими лицами. После окончания срока лизинга такие автомобили возвращаются лизинговым компаниям, которые выставляют их на продажу через специализированные аукционы. Поскольку основной доход от автомобиля компания уже получила в период действия лизингового договора, её задача — реализовать транспортное средство по конкурентной цене, а не получить максимальную торговую наценку, как это часто происходит в автосалонах. Именно поэтому покупка автомобиля через аукцион может быть выгоднее приобретения аналогичной модели у дилера.',
  },
  {
    id: 4,
    question: 'Что такое VIN-код?',
    answer:
      'VIN — это уникальный идентификационный номер автомобиля, состоящий из 17 символов. С его помощью можно получить сведения о характеристиках машины и доступной истории её эксплуатации.',
    link: {
      text: "Подробнее",
      href: "/guides/vin-code",
    }
  },
];

function Questions() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section className="questions" aria-labelledby="questions-title">
      <div className="questions__layout">
        <div className="questions__content">
          <p className="questions__eyebrow">SVAC CARS · QUESTIONS</p>

          <h1 className="questions__title" id="questions-title">
            Есть
            <br/>
            вопросы?
          </h1>

          <p className="questions__description">
            На этой странице собраны ответы на самые частые вопросы
            о подборе и покупке автомобилей в Германии.
          </p>
        </div>

        <div className="questions__list">
          {questions.map((item, index) => {
            const isOpen = openQuestion === item.id;
            const answerId = `question-answer-${item.id}`;

            return (
              <div
                className={`questions__item${isOpen ? ' questions__item--open' : ''}`}
                key={item.id}
              >
                <button
                  className="questions__button"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenQuestion(isOpen ? null : item.id)
                  }
                >
                  <span className="questions__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="questions__label">{item.question}</span>

                  <span className="questions__arrow" aria-hidden="true">
                    <img src={Arrow} alt="" />
                  </span>
                </button>

                <div
                  className="questions__answer"
                  id={answerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className='questions__answer-inner'>
                      <p className="questions__answer-text">{item.answer}</p>

                    {item.link?.href && (
                      <Link
                        className='questions__answer-link'
                        to={item.link.href}
                        >
                          {item.link.text}
                          <span aria-hidden="true">. . .</span>
                        </Link>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Questions;
