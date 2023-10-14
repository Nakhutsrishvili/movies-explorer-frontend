import "./Footer.css";

function Footer() {
  const year = new Date();

  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__content">
        <p className="footer__year">&copy; {year.getFullYear()}</p>
        <nav>
          <ul className="footer__list">
            <li>
              <a href="https://practicum.yandex.ru" className="footer__link">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Nakhutsrishvili"
                className="footer__link"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
