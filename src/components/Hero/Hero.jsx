import TypingAnimation from './TypingAnimation';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import './Hero.css';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'Problem Solver',
    'Creative Thinker',
    'Team Player',
  ];

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-greeting">Hi, my name is</div>
        <h1 className="hero-name">Yitz</h1>
        <h2 className="hero-title">
          I'm a <TypingAnimation texts={roles} />
        </h2>
        <p className="hero-description">
          I build exceptional digital experiences with clean code and thoughtful design.
        </p>
        <button className="hero-cta" onClick={scrollToAbout}>
          Learn More
        </button>
      </div>
      <ScrollIndicator currentSectionId="hero" />
    </section>
  );
};

export default Hero;

