import './Header.css';
import tlgrmLogo from '../../images/icons8-telegram-app-96.svg';
import logo from '../../logo192.png';


function Header(){

  return(
    <header className='header'>
      <img src={logo} alt='Логотип' className='header__logo'></img>
      <h2 className='header__title'>Группа РСК-11</h2>
      <a href='#' className='header__social'>
        <img src={tlgrmLogo} alt='Телеграм' className='header__tlgrm'></img>
      </a>
    </header>
  )


}

export default Header;