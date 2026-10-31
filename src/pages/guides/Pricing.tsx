

import './Guide.css';
import { Link } from 'react-router';
import Arrow from '../../assets/Logos/Arrow.svg';

function Pricing() {
  return (
    <main className="guide">
      <div className="guide__layout">
        {/* Back navigation */}
        <nav className="guide__navigation" aria-label="Навигация">
          <Link className="guide__back-link" to="/questions">
            <span className="guide__back-arrow" aria-hidden="true">
              <img src={Arrow} alt="" />
            </span>
            <span>Вопросы</span>
          </Link>
        </nav>

        <article className="guide__article">
          {/* Article heading */}
          <header className="guide__header">
            <p className="guide__eyebrow">
              SVAC CARS · GUIDE
            </p>

            <h1 className="guide__title">
              Стоимость услуг
            </h1>

            <p className="guide__intro">
              Стоимость наших услуг составляет 3-5% от стоимости автомобиля НЕТТО.
            </p>
            <p className="guide__intro">
              (Не менее 500 евро)
            </p>
          </header>

          {/* IMAGE */}
          {/* <figure className="guide__figure">
            <img
              className="guide__image"
              src="/images/vin-code.jpg"
              alt="Пример расположения VIN-кода автомобиля"
            />
            <figcaption className="guide__image-caption">
              Пример расположения VIN-кода на автомобиле.
            </figcaption>
          </figure> */}
         

          <div className="guide__body">
            <section className="guide__section">
              <h2>Необходимые дополнительные расходы</h2>

              <ul>
                <li>Оплата аукционного сбора — от <b>400 €</b>.</li>
                <li>Доставка автомобиля с аукциона клиенту — от <b>300 €</b>.</li>
                <li>Комплект резины — <b>150–250 €</b>. Если шины входят в комплектацию автомобиля, отказаться от них нельзя.</li>
                <li>Доставка автомобиля автовозом — возможна по предварительной договорённости. По нашему опыту, удобнее и выгоднее заказывать автовоз непосредственно в стране, где находится автомобиль.</li>
                <li>Оформление транзитных номеров:
                  <br/>- Сроком на 6 дней — от <b>120 €</b>.
                  <br/>- Сроком на 15 дней — от <b>250 €</b>. </li>
                <li>Онлайн регистрация в любом городе Германии — от <b>130 €</b>.</li>
              </ul>
              <p><b>Важно!</b> — Если срок действия технического осмотра (TÜV) автомобиля истёк, для оформления экспортных номеров потребуется пройти техосмотр. Стоимость — от <b>150 €</b>.</p>
            </section>

           
           <section className="guide__section">
              <h2>Необезательные расходы</h2>

              <ul>
                <li>Химчистка салона без полировки кузова — <b>200 €</b>.</li>
                <li>Комплексная подготовка автомобиля: чистка салона и полировка кузова — <b>350 €</b>.</li>
                <li>Замена резины на имеющийся комплект шин (при наличии) — <b>25 €</b>.</li>
                <li>Покупка и установка нового комплекта резины — <b>50 €</b> за услугу, стоимость самих шин оплачивается отдельно.</li>
                <li>Организация прохождения сервисного обслуживания у официального дилера — <b>60 €</b> за услугу, стоимость самого обслуживания оплачивается дополнительно.</li>
              </ul>

              <p><b>Важно!</b> <span> — </span>Подбором и поиском подержанных шин мы не занимаемся.</p>
            </section>

          </div>
        </article>

        {/* Bottom navigation */}
        <div className="guide__footer">

          <Link className="guide__back-button" to="/questions">
            <span className="guide__back-button-arrow" aria-hidden="true">
              <img src={Arrow} alt="" />
            </span>
            Вернуться назад
          </Link>

        </div>
      </div>
    </main>
  );
}

export default Pricing;
