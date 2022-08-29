import './project.css';
import React, { useState } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

const Project = ({ img, demo, repo, tech, name, desc }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className='p'>
      <div className='p-browser'>
        <div className='links-group'>
          <a href={demo} target='_blank' rel='noreferrer'>
            <button className='project-btn'>
              <h3>Demo </h3>
            </button>
          </a>
          <a href={repo} target='_blank' rel='noreferrer'>
            <button className='project-btn'>
              <h3>Repo</h3>
            </button>
          </a>
        </div>

        <button
          className='question-btn'
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          onClick={() => setIsShown(true)}
        >
          <BsFillQuestionCircleFill size={20} />
        </button>

        {isShown && (
          <div className='project-info'>
            <p>
              <strong>Project Name</strong>: {name}
            </p>
            <p>
              <strong>Tech</strong>: {tech}
            </p>
            <p>
              <strong>Description</strong>: {desc}
            </p>
          </div>
        )}
      </div>

      <a href={demo} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='p-img' />
      </a>
    </div>
  );
};

export default Project;
