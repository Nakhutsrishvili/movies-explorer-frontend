import "./AboutProject.css";
import "../Section/Section.css";

function AboutProject() {
  return (
    <section className="about-project section" id="about-project">
      <div className="section__header">
        <h2 className="section__title">О проекте</h2>
      </div>
      <div className="about-project__info">
        <div className="about-project__containers">
          <div className="about-project__container">
            <h3 className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__container">
            <h3 className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__time">
          <div className="about-project__backend">
            <p className="about-project__time-text">1 неделя</p>
            <p className="about-project__time-note">Back-end</p>
          </div>
          <div className="about-project__frontend">
            <p className="about-project__time-text about-project__accent">
              4 недели
            </p>
            <p className="about-project__time-note">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
