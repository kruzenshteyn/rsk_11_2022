
import './Hero.css';
import {  Link } from 'react-scroll';

function Hero(props) {

  function handleClick(e){
    alert(`Button ${e.target.name} was clicked`)
  }
  
//Link указывает на класс

  return (
    <div className="hero">
      <h1 className='hero__title'>Учебный проект студента радиотехнического факультета</h1>      
      <nav className='hero__nav'>
        <Link className='hero__button' to='aboutLearning'>Об обучении</Link>
        <Link className='hero__button' to='techs'>Технологии</Link>
        <Link className='hero__button' to='aboutStudent'>Студент</Link>
      </nav>
    </div>
  );
}

export default Hero;