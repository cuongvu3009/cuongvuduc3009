import React from 'react';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About.jsx';
import ProjectList from '../components/ProJectList/ProjectList';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
