import React from 'react';
import './about.css';
import { stacks } from '../../data';

import ProgressBar from '../ProgressBar/ProgressBar';

const About = () => {
  const mostUsedStacks = stacks.slice(0, 11);
  const leastUsedStacks = stacks.slice(11, 14);
  const tools = stacks.slice(14, stacks.length);

  return (
    <div className='about'>
      <h1 style={{ color: '#fff', padding: '50px' }}>
        Technology I am using:{' '}
      </h1>
      <div className='about-container'>
        <div className='about-stack'>
          <div className='about-column-1'>
            {mostUsedStacks.slice(0, 6).map((item) => {
              const purple = '#6a1b9a';
              const green = '#00695c';
              const yellow = '#ef6c00';

              if (item.level === 'novice') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={purple} completed={65} />
                    </div>
                  </article>
                );
              }
              if (item.level === 'good') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={green} completed={80} />
                    </div>
                  </article>
                );
              }
              if (item.level === 'excellent') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={yellow} completed={90} />
                    </div>
                  </article>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className='about-column-2'>
            {mostUsedStacks.slice(6, 12).map((item) => {
              const purple = '#6a1b9a';
              const green = '#00695c';
              const yellow = '#ef6c00';

              if (item.level === 'novice') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={purple} completed={50} />
                    </div>
                  </article>
                );
              }
              if (item.level === 'good') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={green} completed={80} />
                    </div>
                  </article>
                );
              }
              if (item.level === 'excellent') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={yellow} completed={90} />
                    </div>
                  </article>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className='line'></div>
          <div className='about-column-3'>
            {tools.map((item) => {
              const purple = '#6a1b9a';
              const green = '#00695c';
              const yellow = '#ef6c00';

              if (item.level === 'novice') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={purple} completed={65} />
                    </div>
                  </article>
                );
              }
              if (item.level === 'good') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={green} completed={80} />
                    </div>
                  </article>
                );
              }
              if (item.level === 'excellent') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={yellow} completed={90} />
                    </div>
                  </article>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className='about-column-4'>
            {leastUsedStacks.map((item) => {
              const purple = '#6a1b9a';
              const green = '#00695c';
              const yellow = '#ef6c00';

              if (item.level === 'novice') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={purple} completed={65} />
                    </div>
                  </article>
                );
              }
              if (item.level === 'good') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={green} completed={80} />
                    </div>
                  </article>
                );
              }
              if (item.level === 'excellent') {
                return (
                  <article key={item.title} className='stack-wrapper'>
                    <p className='about-class'>{item.class}</p>
                    <a href={item.link} className='stack-link'>
                      <img
                        src={item.img}
                        alt={item.title}
                        className='styled-img'
                      />
                      <h4 className='stack-title'>{item.title}</h4>
                    </a>

                    <div className='stack-progress'>
                      <ProgressBar bgcolor={yellow} completed={90} />
                    </div>
                  </article>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>

      <h1 style={{ color: '#fff', padding: '50px' }}>
        More about my github stats (live):
      </h1>
      <div className='about-github'>
        <div className='github-flex'>
          <img
            alt=''
            src='https://activity-graph.herokuapp.com/graph?username=cuongvu3009&bg_color=ffff&color=000&line=0891b3&point=000&area_color=white&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph'
            className='github-graph'
          />
        </div>
        <div className='github-flex'>
          <img
            src='https://github-readme-streak-stats.herokuapp.com/?user=cuongvu3009'
            alt=''
            className='github-graph'
          />
          <img
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=cuongvu3009&hide=shell&layout=compact&langs_count=8'
            alt=''
            className='github-graph'
          />
          <img
            src='https://github-readme-stats.vercel.app/api?username=cuongvu3009&show_icons=true&locale=en'
            alt=''
            className='github-graph'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
