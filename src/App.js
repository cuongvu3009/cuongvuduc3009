import './App.css';
import Intro from './components/Intro/Intro.jsx';
import About from './components/About/About.jsx';
import ProjectList from './components/ProJectList/ProjectList';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
