import "./AboutMe.css";
import Photo from "../../images/pic__COLOR_pic.jpg";

function AboutMe() {
  return (
    <section className="about-me section" id="student">
      <div className="section__header">
        <h2 className="section__title">Студент</h2>
      </div>
      <div className="about-me__content">
        <div className="about-me__info">
          <h3 className="about-me__title">Виталий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
        </div>
        <a href="https://github.com/Nakhutsrishvili" className="about-me__link">
          Github
        </a>
        <div className="about-me__photo">
          <img className="about-me__pic" src={Photo} alt="Фото студента" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
