import Section from '../Section/Section';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <Section heading='О проекте' name='project' id='project'>
      <ul className='project__list'>
        <li className='project__item'>
          <h3 className='project__title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='project__description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='project__item'>
          <h3 className='project__title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className='project__list project__list_duration'>
        <li className='project__item-duration'>
          <p className='project__time project__time_first'>1 неделя</p>
          <p className='project__text'>Back-end</p>
        </li>
        <li className='project__item'>
          <p className='project__time'>4 недели</p>
          <p className='project__text'>Front-end</p>
        </li>
      </ul>
    </Section>
  );
};

export default AboutProject;
