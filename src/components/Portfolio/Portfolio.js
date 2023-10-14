import "./Portfolio.css";
import portfolioArrow from "../../images/portfolio-arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio section">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a
            className="portfolio__text"
            href="https://how-to-learn-liard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__arrow"
            href="https://how-to-learn-liard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="portfolio__icon"
              src={portfolioArrow}
              alt="Изображение"
            />
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__text"
            href="https://russian-travel-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__arrow"
            href="https://russian-travel-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="portfolio__icon"
              src={portfolioArrow}
              alt="Изображение"
            />
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__text"
            href="https://react-mesto-auth-p3ir.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__arrow"
            href="https://react-mesto-auth-p3ir.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="portfolio__icon"
              src={portfolioArrow}
              alt="Изображение"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
