
import './Hero.css';

function Hero(props) {

  function handleClick(e){
    alert(`Button ${e.target.name} was clicked`)
  }
  
  return (
    <div className="hero">
      <h1 className='hero__title'>Учебный проект студента факультета Веб-разработки.</h1>      
      <nav className='hero__nav'>
        <button className='hero__button' name='aboutProject' onClick={handleClick} >О проекте</button>
        <button className='hero__button'>Технологии</button>
        <button className='hero__button'>Студент</button>
      </nav>
    </div>
  );
}

export default Hero;