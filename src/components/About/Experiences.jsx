import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { experiences } from '../../data';
import './experiences.css';

function Experiences() {
  const [jobs] = useState(experiences);
  const [value, setValue] = useState(0);

  //this line below needed to be put below loading function
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className='section'>
      <h1 style={{ color: '#000', padding: '50px' }}>Experiences</h1>

      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3 className='ex-title'>{title}</h3>
          <p className='job-date'>{dates}</p>
          <h4 className='ex-company'>{company}</h4>

          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Experiences;
