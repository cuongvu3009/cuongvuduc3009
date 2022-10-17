import React from 'react';
import './sort.css';

const Sort = () => {
  return (
    <div className='s-container'>
      <select name='tech' id='s-select'>
        <option value='all' selected>
          All
        </option>
        <option value='mern'>MERN</option>
        <option value='react'>Vanila React</option>
        <option value='firebase'>Firebase</option>
        <option value='next'>Next.js</option>
        <option value='gatsby'>Gatsby.js</option>
      </select>
    </div>
  );
};

export default Sort;
