import './project.css';

const Project = ({ img, link }) => {
  return (
    <div className='p'>
      <div className='p-browser'>
        <button className='project-btn'>Demo</button>
        <button className='project-btn'>Repo</button>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='p-img' />
      </a>
    </div>
  );
};

export default Project;
