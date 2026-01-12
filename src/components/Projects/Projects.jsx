import ProjectCard from './ProjectCard';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description:
        'A comprehensive web application built with React and Node.js. Features include real-time updates, user authentication, and a modern responsive design.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      images: [
        'https://via.placeholder.com/800x450/1e1e1e/4fc3f7?text=Project+One+Image+1',
        'https://via.placeholder.com/800x450/1e1e1e/4fc3f7?text=Project+One+Image+2',
        'https://via.placeholder.com/800x450/1e1e1e/4fc3f7?text=Project+One+Image+3',
      ],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Project Two',
      description:
        'An e-commerce platform with advanced filtering, search functionality, and payment integration. Built with modern technologies for optimal performance.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      images: [
        'https://via.placeholder.com/800x450/1e1e1e/81c784?text=Project+Two+Image+1',
        'https://via.placeholder.com/800x450/1e1e1e/81c784?text=Project+Two+Image+2',
      ],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Project Three',
      description:
        'A mobile-first dashboard application for data visualization and analytics. Features interactive charts, real-time data updates, and customizable widgets.',
      tech: ['React', 'D3.js', 'WebSocket', 'Python'],
      images: [
        'https://via.placeholder.com/800x450/1e1e1e/ffb74d?text=Project+Three+Image+1',
      ],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">
        <span className="section-number">03.</span> Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <ScrollIndicator currentSectionId="projects" />
    </section>
  );
};

export default Projects;

