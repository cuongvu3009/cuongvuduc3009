import React, { useState } from 'react';
import './modal.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className='md-background'
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      <GiHamburgerMenu size={40} />

      {showModal && (
        <div className='md-content'>
          <ul className='md-list'>
            <Link to='/' className='md-item'>
              <li>Home </li>
            </Link>

            <Link to='/about' className='md-item'>
              <li>About </li>
            </Link>

            <Link to='/projects' className='md-item'>
              <li>Projects</li>
            </Link>

            <Link to='/contact' className='md-item'>
              <li> Contact </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Modal;
