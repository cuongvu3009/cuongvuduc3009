import React from 'react';
import './intro.css';
import { BsArrowDownSquareFill } from 'react-icons/bs';
import face from '../../img/face.png';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaFreeCodeCamp } from 'react-icons/fa';

const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='bg'></div>

      <div className='main-content'>
        <div className='img-container'>
          <img alt='Cuong' src={face} className='face' />
        </div>

        <div className='content'>
          <h1 className='intro-title'>WEB FULLSTACK DEVELOPER</h1>
          <p>CUONG VU</p>
          <div className='line'></div>
          <p>
            React | Typescript | Redux | Node.js | Express.JS | Postgresql |
            MongoDB | Docker | AWS
          </p>
          <div className='social-icons'>
            <a href='https://github.com/cuongvu3009'>
              <AiFillGithub size={50} />
            </a>
            <a href='https://www.linkedin.com/in/cuong-vu-duc/'>
              <AiFillLinkedin size={50} />
            </a>
            <a href='https://www.freecodecamp.org/fcc1dac9cb7-db40-4a55-a967-1c24e9e7c0d2'>
              <FaFreeCodeCamp size={50} />
            </a>
          </div>
        </div>

        <div className='icon'>
          <BsArrowDownSquareFill size='30px' />
        </div>
      </div>
    </div>
  );
};

export default Intro;
