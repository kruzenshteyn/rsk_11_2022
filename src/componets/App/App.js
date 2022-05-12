import logo from '../../logo.svg';
import './App.css';

import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutLearning from '../AboutLearning/AboutLearning';
import AboutStudent from '../AboutStudent/AboutStudent';
import Techs from '../Techs/Techs';

function App() {


  
  return (
    <div className="App">
      <Header />
      <main className='app__main'>
        <Hero userName='Dasha' />
        <AboutLearning />
        <Techs />        
        <AboutStudent />        
      </main>
      <Footer />
    </div>
  );
}

export default App;
