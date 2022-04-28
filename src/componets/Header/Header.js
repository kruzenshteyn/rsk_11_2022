import './Header.css';

function Header(){

  return(
    <header className='header'>
      <img src='../../logo192.png' alt='Логотип' className='header__logo'></img>
      <h2 className='header__title'>Группа РСК-11</h2>
      <a href='#' className='header__social'>
        <img src='../../logo192.png' alt='Телеграм' className='header__tlgrm'></img>
      </a>
    </header>
  )


}

export default Header;