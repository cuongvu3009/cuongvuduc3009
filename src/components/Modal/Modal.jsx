import React from 'react';
import './modal.css';
import { Link } from 'react-router-dom';

const Modal = () => {
  return (
    <nav className='md-background'>
      <div className='md-content'>
        <Link to='/'>
          <button className='md-item'>Home</button>
        </Link>

        <Link to='/about'>
          <button className='md-item'>About</button>
        </Link>

        <Link to='/projects'>
          <button className='md-item'>Projects</button>
        </Link>

        <Link to='/resume'>
          <button className='md-item'>Resume</button>
        </Link>

        <Link to='/contact'>
          <button className='md-bigBtn'>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Modal;
