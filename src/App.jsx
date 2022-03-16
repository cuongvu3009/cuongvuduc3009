import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About/About.jsx';
import ProjectList from './components/ProJectList/ProjectList';
import Contact from './components/Contact/Contact';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className='App'>
      <Modal />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<ProjectList />}></Route>

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
