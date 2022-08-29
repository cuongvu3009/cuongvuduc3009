import React from 'react';
import './modal.css';
import { Link } from 'react-router-dom';

const Modal = () => {
  return (
    <nav className='md-background'>
      <div className='md-content'>
        <button className='md-item'>
          <Link to='/' className='styled-link'>
            Home
          </Link>
        </button>

        <button className='md-item'>
          <Link to='/about' className='styled-link'>
            About
          </Link>
        </button>

        <button className='md-item'>
          <Link to='/projects' className='styled-link'>
            Projects
          </Link>
        </button>

        <button className='md-item'>
          <Link to='/resume' className='styled-link'>
            Resume
          </Link>
        </button>

        <button className='md-bigBtn'>
          <Link to='/contact' className='styled-link'>
            Contact Me
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Modal;
