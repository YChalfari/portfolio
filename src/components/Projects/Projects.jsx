import ProjectCard from './ProjectCard';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import './Projects.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const Projects = () => {
  const projects = [
    {
      title: 'Family Recipes',
      description:
        'A family cookbook you can ask, share, and cook from. Questions are answered from the recipes a person is allowed to see, with a citation for each one. The interface is English or Hebrew, and each recipe keeps the reading direction it was written in.',
      highlights: [
        'Ask in plain language. The model only sees recipes that person can open, and the answer cites them.',
        'Paste a link or a photo to draft a recipe. Nothing is saved until you keep it.',
        'A substitution is a preview. Accepting it is a normal save, with the same version history as a hand edit.',
        'Groups with owners, editors, and viewers. Edits send the version they started from, so a stale save comes back as a conflict instead of an overwrite.',
        'The last recipes stay in the browser, so the book still opens while a free host is waking up.',
      ],
      tech: ['React', 'FastAPI', 'MongoDB', 'Redis', 'Firebase', 'Gemini'],
      media: [
        {
          type: 'video',
          src: asset('projects/family-recipes/demo.mp4'),
          poster: asset('projects/family-recipes/poster.jpg'),
          alt: 'Screen recording of asking the cookbook, opening the cited recipe, and switching the page to Hebrew',
          caption: 'Ask the cookbook, open the recipe it cites, then switch the page to Hebrew. The recipe stays in its own direction.',
        },
        {
          src: asset('projects/family-recipes/ask.png'),
          alt: 'Ask the cookbook. The answer cites Daddy\'s Pancakes.',
          caption: 'The answer is written from recipes this person can see, and the recipe is cited.',
        },
        {
          src: asset('projects/family-recipes/recipe.png'),
          alt: 'A Hebrew pancake recipe shown right to left inside an English page',
          caption: 'A Hebrew recipe stays right-to-left inside an English page, including the ingredients.',
        },
        {
          src: asset('projects/family-recipes/hebrew.png'),
          alt: 'The same recipe with the interface switched to Hebrew',
          caption: 'The chrome follows the language switch. An English title stays left-to-right inside the Hebrew page.',
        },
        {
          src: asset('projects/family-recipes/suggest.png'),
          alt: 'A preview that replaces milk and butter with pareve substitutes, with Discard and Use this version',
          caption: 'Suggest a change and you get a preview. Nothing is saved until you accept it.',
        },
      ],
      github: 'https://github.com/YChalfari/family-recipes',
      demo: 'https://family-recipes-z1.vercel.app',
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

