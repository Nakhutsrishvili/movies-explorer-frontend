import Section from '../Section/Section';
import './AboutMe.css';
import avatar from '../../images/avatar.jpg';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = () => {
  return (
    <Section heading='Студент' name='about-me'>
      <div className='about-me__wrapper'>
        <div className='about-me__inner'>
          <h2 className='about-me__title'>Виталий</h2>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className='about-me__link link-hover'
            to='https://github.com/Nakhutsrishvili'
            target='_blank'
          >
            Github
          </Link>
        </div>
        <img className='about-me__avatar' src={avatar} alt='Аватар студента.' />
      </div>

      <Portfolio />
    </Section>
  );
};

export default AboutMe;
