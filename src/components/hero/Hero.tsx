import './Hero.css';
import Arrow from '../../assets/Logos/Arrow.svg';
import Car1 from '../../assets/Images/cars1.jpg';
import Car2 from '../../assets/Images/cars2.jpg';
import Car3 from '../../assets/Images/cars3.jpg';
import { useEffect, useState } from 'react';


const cars = [
  { src: Car1, alt: 'SVAC CARS 1' },
  { src: Car2, alt: 'SVAC CARS 2' },
  { src: Car3, alt: 'SVAC CARS 3' },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % cars.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPrevious = () => {
    setActiveSlide(
      (current) => (current - 1 + cars.length) % cars.length
    );
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % cars.length);
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">
            SVAC CARS · FAHRZEUGVERMITTLUNG
          </p>

          <h1 className="hero__title" id="hero-title">
            Твоё авто
            <br />
            Наша забота
          </h1>

          <p className="hero__description">
            Подбор, диагностика и покупка автомобилей на аукционах Германии под ключ.
          </p>

          <a className="hero__more" href="#contact">
            <span>Больше</span>
            <img src={Arrow} alt="" aria-hidden="true" />
          </a>
        </div>

        <div
          className="hero__slider"
          aria-label="car gallery"
          aria-roledescription="carousel"
        >
          <div className="hero__slides">
            {cars.map((car, index) => (
              <img
                key={car.src}
                className={`hero__image ${
                  index === activeSlide ? 'hero__image--active' : ''
                }`}
                src={car.src}
                alt={car.alt}
                aria-hidden={index !== activeSlide}
              />
            ))}
          </div>

          <div className="hero__slider-controls">
            <button
              className="hero__slider-arrow hero__slider-arrow--previous"
              type="button"
              onClick={showPrevious}
              aria-label="previous car"
            >
              <img src={Arrow} alt="" aria-hidden="true" />
            </button>

            <div className="hero__dots" aria-label="choose car">
              {cars.map((car, index) => (
                <button
                  key={car.src}
                  type="button"
                  className={`hero__dot ${
                    index === activeSlide ? 'hero__dot--active' : ''
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`show car ${index + 1}`}
                  aria-pressed={index === activeSlide}
                />
              ))}
            </div>

            <button
              className="hero__slider-arrow hero__slider-arrow--next"
              type="button"
              onClick={showNext}
              aria-label="next car"
            >
              <img src={Arrow} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;