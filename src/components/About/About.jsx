import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import './About.css';

const About = () => {
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
          <div className="image-wrapper">
            <div className="image-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator currentSectionId="about" />
    </section>
  );
};

export default About;

