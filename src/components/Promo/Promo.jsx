import './Promo.css';
import Section from '../Section/Section';
import { Link } from 'react-router-dom';

function Promo() {
  return (
    <Section
      heading='Учебный проект студента факультета Веб&#8209;разработки.'
      name='promo'
    >
      <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <Link className='promo__link button-hover' to='#project' reloadDocument>
        Узнать больше
      </Link>
    </Section>
  );
}

export default Promo;
