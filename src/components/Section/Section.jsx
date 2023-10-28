import './Section.css';

function Section({ name, children, heading, id }) {
  return (
    <section className={`main__container ${name}`} id={id}>
      <div className={`${name}__container main__inner`}>
        {name === 'promo' ? (
          <h1 className='promo__heading'>{heading}</h1>
        ) : (
          <h2 className={`${name}__heading heading`}>{heading}</h2>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
