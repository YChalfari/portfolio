import ExperienceItem from './ExperienceItem';
import Skills from './Skills';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Faintlines',
      companyUrl: 'https://faintlines.com',
      role: 'Junior Full Stack Developer, Game Designer, Content Creator',
      date: '2022 - 2025',
      achievements: [
        'Aided in the development of multiple games with over 1.5M+ downloads',
        'Architected and implemented microservices using Python and React',
        'Onboarded new developers and established coding best practices',
        'Developed CLI tools to automate tasks and improve workflow',
        'Created dashboards and other internal tools to improve efficiency',
        'Wrote comprehensive documentation for the development process',
        'Created test suites using Jest for the frontend and pytest for the backend',
      ],
      techStack: ['React', 'Python', 'MongoDB', 'CLI', 'Docker', 'Git', 'Jest', 'pytest'],
      links: [
        { label: 'Company Website', url: 'https://faintlines.com' },
        { label: 'Peek a Phone Game', url: 'https://play.google.com/store/apps/details?id=com.peekaphone.app&hl=en' },
        { label: 'The Founder Game', url: 'https://play.google.com/store/apps/details?id=com.faintlines.investomania&hl=en' },
      ],
    },
    {
      company: 'iintoo',
      companyUrl: 'https://iintoo.com',
      role: 'Intern Full Stack Developer',
      date: '2022 - 2022',
      achievements: [
        'Led a team of interns to develope a custom form builder component that allowed for the creation of complex forms with conditional logic and validation',
        'Learned how to use Laravel and create SQL queries'
      ],
      techStack: ['React', 'Redux', 'Node.js', 'PhP', 'SQL', 'MySQL', 'Laravel'],
      links: [
        { label: 'Company Website', url: 'https://iintoo.com' },
      ],
    },
    {
      company: 'Appleseeds',
      role: 'Full Stack Developement Student',
      date: '2021 - 2022',
      achievements: [
        'Full time studies from morning until evening, 5 days a week',
        'Studied core React concepts and principles',
        'Multiple projects and daily assignments',
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    },
  ];

  return (
    <section id="experience" className="experience section">
      <h2 className="section-title">
        <span className="section-number">02.</span> Experience
      </h2>
      <div className="experience-content">
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </div>
      <Skills />
      <ScrollIndicator currentSectionId="experience" />
    </section>
  );
};

export default Experience;

