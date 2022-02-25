import React from 'react';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About.jsx';
import ProjectList from '../components/ProJectList/ProjectList';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </>
  );
};

export default Home;
