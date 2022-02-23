import './projectList.css';
import Project from '../Project/Project';
import { products } from '../../data';

const ProjectList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>My project</h1>
        <p className='pl-desc'>Find more in my github repo</p>
      </div>
      <div className='pl-list'>
        {products.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
