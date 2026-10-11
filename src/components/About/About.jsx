import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import './About.css';
import myPhoto from '../../assets/me.jpg';

const About = () => {
  const followPortrait = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty('--shift-x', `${x * 32}px`);
    event.currentTarget.style.setProperty('--shift-y', `${y * 32}px`);
    event.currentTarget.style.setProperty('--tilt', `${x * 6}deg`);
  };

  const resetPortrait = (event) => {
    event.currentTarget.style.setProperty('--shift-x', '0px');
    event.currentTarget.style.setProperty('--shift-y', '0px');
    event.currentTarget.style.setProperty('--tilt', '0deg');
  };

  return (
    <section id="about" className="about section">
      <h2 className="section-title">
        <span className="section-number">01.</span> About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a software engineer based in Central Israel, specializing in building
            exceptional digital experiences. I have a passion for creating clean, efficient code
            and solving complex problems.
          </p>
          <p>
            I enjoy turning ideas into reality through elegant solutions. Whether it's a web
            application, a mobile app, automating workflows, or a backend service, I love the challenge of bringing
            concepts to life.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="tech-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="about-image">
          <div
            className="image-wrapper"
            onMouseMove={followPortrait}
            onMouseLeave={resetPortrait}
          >
            <div className="image-placeholder">
              <div className="portrait-motion">
                <img src={myPhoto} alt="My Photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator currentSectionId="about" />
    </section>
  );
};

export default About;

