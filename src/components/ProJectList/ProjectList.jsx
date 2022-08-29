import './projectList.css';
import Project from '../Project/Project';
import { products } from '../../data';

const ProjectList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>My projects</h1>
        <p className='pl-desc'>
          Find more at my{' '}
          <a
            href='https://github.com/cuongvu3009'
            target='_blank'
            rel='noreferrer'
          >
            github repo
          </a>{' '}
        </p>
      </div>

      <div className='pl-list'>
        {products.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            demo={item.demo}
            repo={item.repo}
            tech={item.tech}
            name={item.name}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
