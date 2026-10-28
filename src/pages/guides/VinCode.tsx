
import './Guide.css';
import { Link } from 'react-router';
import Arrow from '../../assets/Logos/Arrow.svg';
import vincode from '../../assets/Images/vincode.png';
import vinDiagram from '../../assets/Images/vinDiagram.png';

import carVertical from '../../assets/Images/carVertical.png';
import autoDNA from '../../assets/Images/autodna.webp';
import carfax from '../../assets/Images/carfax.webp';
import vincario from '../../assets/Images/vincario.webp';
import cebia from '../../assets/Images/cebia.webp';


function VinCode() {
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
              Что такое VIN-код автомобиля?
            </h1>

            <p className="guide__intro">
              VIN-код — это уникальный идентификационный номер
              автомобиля, который помогает установить его
              происхождение, проверить доступные сведения об истории
              и сопоставить данные машины с документами.
            </p>
          </header>

          {/* IMAGE */}
          <figure className="guide__figure">
            <img
              className="guide__image"
              src={vincode}
              alt="VIN-код"
            />
          </figure>
         

          <div className="guide__body">
            <section className="guide__section">
              <h2>Что помогает выявить проверка VIN-кода?</h2>

              <ul>
                <li>Скрученный пробег;</li>
                <li>Участие в ДТП и зафиксированные повреждения;</li>
                <li>Предыдущих владельцев и особенности эксплуатации;</li>
                <li>Историю технического обслуживания;</li>
                <li>Возможные записи об угоне.</li>
              </ul>
            </section>

            <section className="guide__section">
              <h2>Где найти VIN автомобиля?</h2>
              <p>
                В зависимости от модели и производителя VIN может
                находиться в нескольких местах:
              </p>
              <ul>
                <li>под лобовым стеклом со стороны водителя;</li>
                <li>на стойке двери или дверном проёме;</li>
                <li>в моторном отсеке или на кузове;</li>
                <li>в регистрационных документах автомобиля.</li>
              </ul>
              <p>
                Точное расположение зависит от марки и модели.
                При проверке важно убедиться, что номер на автомобиле
                совпадает с номером в документах.
              </p>
            </section>

            {/* IMAGE */}
          <figure className="guide__figure">
            <img
              className="guide__image"
              src={vinDiagram}
              alt="Пример расположения VIN-кода автомобиля"
            />
            <figcaption className="guide__image-caption">
              Пример расположения VIN-кода на автомобиле.
            </figcaption>
          </figure>


           {/*Services for VIN checking*/} 
            <section className="guide__section">
              <h2>Лучшие сервисы для проверки VIN:</h2>

              <a
                className="guide__card"
                href="https://www.carvertical.com/de/landing/discount/discount20?campaign_id=21311991770&adgroup_id=196925466915&utm_source=google&utm_medium=cpc&utm_campaign=%5BS%5D-cV-Brand-%5BPL%5D&utm_term=&gad_source=1&gad_campaignid=21311991770&gbraid=0AAAAA9qE51uGMpRzPDJdpE0eDjPil3rc8&gclid=CjwKCAjwl4HXBhAjEiwAHlpWhNccN_mv5-E0PH1VgTqmVay9OCDRxvjA5nSFrWqm-e-ZqG1Uw6kOQRoCX1EQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="guide__card-image">
                  <img src={carVertical} alt="CarVertical" />
                </div>
                <div className="guide__card-content">
                  <h3>CarVertical</h3>
                  <p>
                    Подходит для проверки повреждений, пробега и доступной
                    истории автомобиля. В некоторых отчётах есть архивные
                    фотографии и оценка рыночной стоимости.
                  </p>
                </div>
              </a>

              <a
                className="guide__card"
                href="https://www.carfax.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="guide__card-image">
                  <img src={carfax} alt="CARFAX" />
                </div>
                <div className="guide__card-content">
                  <h3>CARFAX</h3>
                  <p>
                    Позволяет изучить историю повреждений, пробега,
                    владельцев и регистрации автомобиля в разных странах.
                  </p>
                </div>
              </a>

              <a
                className="guide__card"
                href="https://www.autodna.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="guide__card-image">
                  <img src={autoDNA} alt="AutoDNA" />
                </div>
                <div className="guide__card-content">
                  <h3>AutoDNA</h3>
                  <p>
                    Предоставляет сведения о пробеге, ДТП, предыдущем
                    использовании автомобиля и доступных архивных фотографиях.
                  </p>
                </div>
              </a>

              <a
                className="guide__card"
                href="https://vincario.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="guide__card-image">
                  <img src={vincario} alt="Vincario" />
                </div>
                <div className="guide__card-content">
                  <h3>Vincario</h3>
                  <p>
                    Полезен для быстрого определения характеристик автомобиля
                    и для профессионалов, которым требуется обрабатывать
                    большое количество VIN-номеров.
                  </p>
                </div>
              </a>

              <a
                className="guide__card"
                href="https://de.cebia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="guide__card-image">
                  <img src={cebia} alt="Cebia" />
                </div>
                <div className="guide__card-content">
                  <h3>Cebia</h3>
                  <p>
                    Особенно актуален для автомобилей, связанных с Чехией
                    и Словакией. Позволяет проверить доступные сведения
                    об эксплуатации, пробеге и повреждениях.
                  </p>
                </div>
              </a>
            </section>


            <section className="guide__section">
              <h2>Почему важно проверить VIN перед покупкой?</h2>

              <p>
                При покупке автомобиля в Германии проверка VIN помогает получить дополнительную информацию об истории машины и сопоставить её с данными в объявлении и документах. В зависимости от доступных сведений можно выявить расхождения в пробеге, узнать о зафиксированных повреждениях и проверить отдельные факты из истории эксплуатации автомобиля.
              </p>

              <p>
                Однако отчёт по VIN не всегда содержит полную историю машины и не гарантирует выявления всех проблем. Поэтому перед покупкой важно также проверить документы, осмотреть автомобиль и провести техническую диагностику.
              </p>
            </section>

            <section className="guide__section guide__section--last">
              <h2>Подведём Итог</h2>

              <p>
                VIN-код — важный инструмент для идентификации
                автомобиля и поиска информации о его прошлом.
                Проверка VIN помогает обнаружить возможные проблемы с пробегом, повреждениями и историей эксплуатации до заключения сделки. Особенно полезна она при покупке автомобиля из другой страны или на онлайн-аукционе, когда нет возможности сразу осмотреть машину лично.
              </p>
              <p>
                Оптимальный подход — проверить VIN, изучить фотографии и документы, а затем провести техническую диагностику автомобиля.
              </p>
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

export default VinCode;
