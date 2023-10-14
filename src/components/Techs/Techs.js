import "./Techs.css";
import "../Section/Section.css";

function Techs() {
  return (
    <section className="techs section" id="techs">
      <div className="section__header">
        <h2 className="section__title">Технологии</h2>
      </div>
      <div className="techs__info">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="techs__wrapper">
        <ul className="techs__cards">
          <li className="techs__card">
            <p className="techs__card-text">HTML</p>
          </li>
          <li className="techs__card">
            <p className="techs__card-text">CSS</p>
          </li>
          <li className="techs__card">
            <p className="techs__card-text">JS</p>
          </li>
          <li className="techs__card">
            <p className="techs__card-text">React</p>
          </li>
          <li className="techs__card">
            <p className="techs__card-text">Git</p>
          </li>
          <li className="techs__card">
            <p className="techs__card-text">Express.js</p>
          </li>
          <li className="techs__card">
            <p className="techs__card-text">MongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
