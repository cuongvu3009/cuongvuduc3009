import React from 'react';
import './modal.css';
import { Link } from 'react-router-dom';

const Modal = () => {
  return (
    <nav className='md-background'>
      <div className='md-content'>
        <Link to='/' className='styled-link'>
          <button className='md-item'>Home</button>
        </Link>

        <Link to='/about' className='styled-link'>
          <button className='md-item'>About</button>
        </Link>

        <Link to='/projects' className='styled-link'>
          <button className='md-item'>Projects</button>
        </Link>

        <Link to='/resume' className='styled-link'>
          <button className='md-item'>Resume</button>
        </Link>

        <Link to='/contact' className='styled-link'>
          <button className='md-bigBtn'>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Modal;
