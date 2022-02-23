import React from 'react';
import './intro.css';
import { BsArrowDownSquareFill } from 'react-icons/bs';
import face from '../../img/face.png';

const Intro = () => {
  return (
    <div className='container'>
      <div className='left'>
        <div className='main-content'>
          <div className='content'>
            <h1>Hello, My name is</h1>
            <h1>Cuong Vu</h1>
            <p>I am React Front-end developer</p>
          </div>

          <div className='icon'>
            <BsArrowDownSquareFill size='30px' />
          </div>
        </div>
      </div>

      <div className='right'>
        <div className='polygon'></div>
        <img alt='Cuong' src={face} width='600' height='600' className='face' />
      </div>
    </div>
  );
};

export default Intro;
