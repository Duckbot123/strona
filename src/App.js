import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Logo from './assets/logo.png';
import Circle from './assets/circle.svg';
import Circles from './assets/circles.svg';
import Triangle from './assets/triangle.svg';
import WaveFirst from './assets/waveFirst.svg';
import WaveSecond from './assets/waveSecond.svg';
import './App.sass';

const App = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
    AOS.refresh();
  });

  return (
    <div className="App">
      <header className="header">
        <a href="https://duckbot.pl" className="header-logo">
          <img src={Logo} alt="logo" className="header-logo-img" />
          <p className="header-brand">
            <span className="text-orange">duck</span>
            <span className="text-green">bot</span>
            .pl
          </p>
        </a>
        <a href="#">
          <div className="btn">
            Dodaj bota
          </div>
        </a>
      </header>
      <div className="hero">
        <div className="hero-content" data-aos="fade-right">
          <p className="hero-content-text">Potrzebujesz kozackiego <br /> Bota na Discord?</p>
          <div className="hero-content-buttons">
            <a href="#">
              <div className="btn">Dodaj bota</div>
            </a>
            <a href="#">
              <div className="btn btn-green">Support</div>
            </a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src={Logo} alt="logo" />
        </div>
        <a href="#about" className="hero-navigate">
          Scrolluj w dół
          <div className="hero-navigate-icon">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </a>
        <img src={WaveFirst} alt="background" className='wave-first' />
        <img src={Circles} alt="background" className='circles' />
      </div>
      <div className="separator"></div>
      <div className="about" id='about'>
        <h1 className="about-title" data-aos="fade-up">O developerze bota</h1>
        <div className="about-content" data-aos="fade-up">
          <div className="about-img">
            <img src={Logo} alt="logo" />
          </div>
          <div className="about-text">
            <div className="about-text-title">Hej jestem konx</div>
            <div className="about-text-title-secondary">jeden z developerów Duckbota!</div>
            <div className="about-text-description">Chciałbyś nawiązać ze mną kontakt w sprawie kupna bota? <br /> Napisz mi na <a href="#">PV</a></div>
          </div>
        </div>
        <img src={WaveSecond} alt="background" className='wave-second' />
        <img src={Circle} alt="background" className='circle' />
        <img src={Triangle} alt="background" className='triangle' />
        <footer className="footer">
          <div className="footer-wrapper">
            Copyright <span className="text-orange">duckbot.pl</span> 2022
          </div>
          <div className="footer-wrapper">
            Realizacja <a href="https://allmake.pl" style={{ color: '#07c2ff' }}>allMake.pl</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
