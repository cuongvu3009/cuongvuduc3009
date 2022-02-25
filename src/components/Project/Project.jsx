import './project.css';

const Project = ({ img, demo, repo }) => {
  return (
    <div className='p'>
      <div className='p-browser'>
        <a href={demo} target='_blank' rel='noreferrer'>
          <button className='project-btn'>
            <h3>Demo</h3>
          </button>
        </a>
        <a href={repo} target='_blank' rel='noreferrer'>
          <button className='project-btn'>
            <h3>Repo</h3>
          </button>
        </a>
      </div>
      <a href={demo} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='p-img' />
      </a>
    </div>
  );
};

export default Project;
