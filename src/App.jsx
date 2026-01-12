import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import References from './components/References/References';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <References />
      <Contact />
    </Layout>
  );
}

export default App;
