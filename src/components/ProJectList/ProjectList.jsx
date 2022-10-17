import { useState, useEffect, useRef } from 'react';
import './projectList.css';
import Project from '../Project/Project';
import Select from 'react-select';

//	firebase
import { projectFirestore } from '../../firebase/config';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const categories = [
    { value: '', label: 'All' },
    { value: 'Mern', label: 'Mern' },
    { value: 'React', label: 'Vanila React' },
    { value: 'Next', label: 'Next' },
    { value: 'Gatsby', label: 'Gatsby' },
    { value: 'Firebase', label: 'Firebase' },
    { value: 'Context API', label: 'Context API' },
    { value: 'Redux', label: 'Redux' },
  ];
  console.log(query);

  // if we don't use a ref --> infinite loop in useEffect
  // cquery is an array and is "different" on every function call
  // const currentQuery = useRef(query).current;

  useEffect(() => {
    let ref = projectFirestore.collection('projects');

    if (query) {
      ref = ref.where('tech', 'array-contains', query);
    }

    const unsubcribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];

        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        //	update state
        setProjects(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('could not fetch data');
      }
    );

    //	unsubscribe on unmount
    return () => unsubcribe();
  }, [query]);

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
          </a>
        </p>

        {/* Sort */}
        <div className='s-container'>
          <Select
            options={categories}
            id='s-select'
            onChange={(option) => setQuery(option.value)}
          />
        </div>
      </div>

      <div className='pl-list'>
        {projects.map((item) => (
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
