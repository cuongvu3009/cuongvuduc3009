import React from 'react';
import './about.css';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';

import { SiFirebase } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-item'>About Me</h1>
      <p className='about-item'>I have built stuffs with those technologies</p>
      <div className='about-item'>
        <div className='icons-container'>
          <h2>Front-end</h2>
          <span className='about-icons'>
            <FaReact size={50} className='about-icon' />
            <SiTypescript size={50} className='about-icon' />
            <SiRedux size={50} className='about-icon' />
            <SiGraphql size={50} className='about-icon' />
          </span>
        </div>

        <div className='icons-container'>
          <h2>Front-end Frameworks</h2>
          <span className='about-icons'>
            <SiNextdotjs size={50} className='about-icon' />
            <SiGatsby size={50} className='about-icon' />
          </span>
        </div>

        <div className='icons-container'>
          <h2>Back-end</h2>
          <span className='about-icons'>
            <SiFirebase size={50} className='about-icon' />
            <SiMongodb size={50} className='about-icon' />
            <SiExpress size={50} className='about-icon' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
