import blog from './img/blog.png';
import hackernews from './img/hackernews.png';
import recipes from './img/recipes.png';
import searchCoctails from './img/searchCoctails.png';
import chatDemo from './img/chatDemo.png';
import realEstate from './img/realEstateImg.png';
import github from './img/github.png';
import store from './img/store.png';
import job from './img/job.png';
import blogMega from './img/blogMega.png';
import social from './img/social.png';
import youtube from './img/youtube.png';

import { v4 as uuidv4 } from 'uuid';

export const products = [
  {
    id: uuidv4(),
    img: blog,
    demo: 'https://blog3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/mdx-blog',
    name: 'MDX blog',
    tech: 'React, Gatsby, Markdown',
    desc: 'Blog App using Gatsby, Markdown',
  },
  {
    id: uuidv4(),
    img: chatDemo,
    demo: 'https://chat-app-3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/chatApp',
    name: 'Chat App',
    tech: 'React, ChatEngine',
    desc: 'Simple Chat app using ChatEngine.io',
  },
  {
    id: uuidv4(),
    img: searchCoctails,
    demo: 'https://search-4-cocktails.netlify.app/',
    repo: 'https://github.com/cuongvu3009/ultimate-cocktails-db',
    name: 'Search Cocktails',
    tech: 'React, Context Api',
    desc: 'Simple search cocktail app using https://www.thecocktaildb.com/ api, that fetch cocktails recipe bases on custom search',
  },
  {
    id: uuidv4(),
    img: hackernews,
    demo: 'https://hackernews3009.netlify.app/',
    repo: 'http://github.com/cuongvu3009/hacker-news',
    name: 'Hacker news',
    tech: 'React, Redux',
    desc: 'Study redux by making a simple hacker news, which fetch api from https://hn.algolia.com/api/v1',
  },
  {
    id: uuidv4(),
    img: recipes,
    demo: 'https://recipes3009.netlify.app/about',
    repo: 'http://github.com/cuongvu3009/simply-recipes',
    name: 'Simply Recipes',
    tech: 'React, Gatsby, JS',
    desc: 'Gatsby website',
  },
  {
    id: uuidv4(),
    img: realEstate,
    demo: 'https://real-estate-3009.vercel.app/',
    repo: 'https://github.com/cuongvu3009/real-estate',
    name: 'Realtor',
    tech: 'React, Next',
    desc: 'Study Next by making a real estate website. The api is provided by rapidapi',
  },
  {
    id: uuidv4(),
    img: github,
    demo: 'https://github-3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/Github-3009',
    name: 'Github finder',
    tech: 'React, auth0, Fusion Charts, Context API',
    desc: 'Search any github user profile at ease. This website includes authentication which powered by auth0. The api is provided by https://api.github.com',
  },
  {
    id: uuidv4(),
    img: store,
    demo: 'https://store-3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/store',
    name: 'Ecommerce website',
    tech: 'React, auth0, Stripe, Context API, Netlify cli',
    desc: 'Ecommerce website which utilize stripe for payment, and auth0 for authentication. The main skeleton of state management is backed by context api.',
  },
  {
    id: uuidv4(),
    img: job,
    demo: 'https://job-3009.herokuapp.com/',
    repo: 'https://github.com/cuongvu3009/jobify',
    name: 'Job website',
    tech: 'React, JWT, Mongodb, Context API, Heroku, Node, Express',
    desc: 'Job search website with authentication, analysis dashboard, and add job features',
  },
  {
    id: uuidv4(),
    img: blogMega,
    demo: 'https://blog-3009.herokuapp.com/',
    repo: 'https://github.com/cuongvu3009/blog3009',
    name: 'Blog website',
    tech: 'React, JWT, Mongodb, Context API, Heroku, Node, Express',
    desc: 'Blog website with authentication, and add blog',
  },
  {
    id: uuidv4(),
    img: social,
    demo: 'https://chat-app-3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/social-firebase',
    name: 'Social website',
    tech: 'React, Firebase',
    desc: 'Social website with authentication, add post, comment, chat, online status.. all powered by firebase',
  },
  {
    id: uuidv4(),
    img: youtube,
    demo: 'https://youtube-3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/YoutubeClone-API',
    name: 'Youtube clone website',
    tech: 'React, JWT, Mongodb, Context API, Redux, Node, Express, Firebase',
    desc: 'Youtube clone website with authentication, upload content, dark/light mode, comment, chat, like/dislike function',
  },
];

export const stacks = [
  {
    title: 'react',
    link: 'https://reactjs.org/',
    img: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
    level: 'excellent',
    class: 'FE',
  },
  {
    title: 'redux',
    link: 'https://redux.js.org',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    level: 'excellent',
    class: 'FE',
  },
  {
    title: 'tailwind',
    link: 'https://tailwindcss.com/',
    img: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    level: 'good',
    class: 'FE',
  },
  {
    title: 'typescript',
    link: 'https://www.typescriptlang.org/',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    level: 'good',
    class: 'FE',
  },
  {
    title: 'angular',
    link: 'https://angular.io/',
    img: 'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
    level: 'novice',
    class: 'FE',
  },
  {
    title: 'graphql',
    link: 'https://graphql.org/',
    img: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
    level: 'good',
    class: 'FE',
  },

  {
    title: 'nodejs',
    link: 'https://nodejs.org',
    img: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
    level: 'excellent',
    class: 'BE',
  },
  {
    title: 'expressjs',
    link: 'https://expressjs.com/',
    img: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg',
    level: 'excellent',
    class: 'BE',
  },

  {
    title: 'django',
    link: 'https://www.djangoproject.com/',
    img: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg',
    level: 'novice',
    class: 'BE',
  },
  {
    title: 'spring',
    link: 'https://spring.io/projects/spring-boot',
    img: 'https://www.vectorlogo.zone/logos/springio/springio-ar21.svg',
    level: 'novice',
    class: 'BE',
  },
  {
    title: 'firebase',
    link: 'https://firebase.google.com/',
    img: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
    level: 'excellent',
    class: 'BE',
  },

  {
    title: 'postgresql',
    link: 'https://www.postgresql.org/',
    img: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-vertical.svg',
    level: 'novice',
    class: 'DB',
  },
  {
    title: 'mongodb',
    link: 'https://www.mongodb.com/',
    img: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
    level: 'excellent',
    class: 'DB',
  },
  {
    title: 'docker',
    link: 'https://www.docker.com/',
    img: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
    level: 'excellent',
    class: 'Tool',
  },
  {
    title: 'github',
    link: 'https://git-scm.com/',
    img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    level: 'excellent',
    class: 'Tool',
  },
  {
    title: 'heroku',
    link: 'https://heroku.com',
    img: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
    level: 'excellent',
    class: 'Tool',
  },
  {
    title: 'jestjs',
    link: 'https://jestjs.io',
    img: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
    level: 'good',
    class: 'Tool',
  },
  {
    title: 'aws',
    link: 'https://aws.amazon.com/',
    img: 'https://www.vectorlogo.zone/logos/amazon_awslambda/amazon_awslambda-icon.svg',
    level: 'good',
    class: 'Tool',
  },
];

export const experiences = [
  {
    id: uuidv4(),
    order: 1,
    title: 'FULL STACK DEVELOPER - Fulltime',
    dates: 'May 2022 - September 2022',
    duties: [
      'Developed an ecommerce website project for the firm using React.js, Node.js, and other Micro service technologies.',
      'Designed a web-based applications structure, to make it scalable and functional.',
      'Team work with other developers to deliver web service on time, also, communicate with UI designer, sales team and content creator for efficient workflow.',
      'Working with DevOps practices (Bash scripting, Docker containers, and CI/CD with GitHub Actions) and Cloud Services with AWS.',
    ],
    company: 'Mehtaheino | Espoo, Finland ',
  },
  {
    id: uuidv4(),
    order: 2,
    title: 'FULL STACK DEVELOPER - Fulltime',
    dates: 'October 2021 - February 2022',
    duties: [
      'Sharpening competence as a Full Stack Developer by collaborating with other developers of different seniorities on a diverse range of projects and real-life challenges.',
      'Focusing on front-end development with JavaScript, TypeScript, React.js, Redux in addition to other technologies and concepts such as accessibility and animations.',
      'Building back-end for web-based applications with frameworks such as Node.js and Express.js.',
      'Covering additional concepts such as API development and documentation, unit testing with Jest, SQL and NoSQL databases, and version control with GitHub.',
      'Working with DevOps practices (Bash scripting, Docker containers, and CI/CD with GitHub Actions) and Cloud Services with AWS.',
    ],
    company: 'Integrify | Helsinki, Finland ',
  },
  {
    id: uuidv4(),
    order: 3,
    title: 'FULL STACK DEVELOPER TRAINEE - Parttime',
    dates: 'Mar 2021 - Jun 2021',
    duties: [
      'Collaborated with other team members to ideate and deliver projects on a quarterly basis',
      'Working closely with a senior developer to provide a qualified and professional UI',
      'Applying industrial standard languages such as Javascript, HTML, CSS, React to a internal web application project',
    ],
    company: 'Yield Systems | Espoo, Finland ',
  },
  {
    id: uuidv4(),
    order: 4,
    title: 'WEB DEVELOPER INTERNSHIP - Fulltime',
    dates: 'January 2020 - July 2020',
    duties: [
      'Developed an internal project for the firm using React.js, JavaScript, and other Micro frontend technologies to store learning documents and engage among each other',
      'Collaborated with 10 team members including a scrum master and project owner to ideate and deliver projects on a quarterly basis',
      "Contributed to the annual income of the company's revenue of €2.5 million euros by delivering internal projects and shadowing lead developers on large projects",
    ],
    company: 'redWEB ApS | Ho Chi Minh City, Vietnam',
  },
  {
    id: uuidv4(),
    order: 5,
    title: 'WORDPRESS DEVELOPER - SELF-EMPLOYED',
    dates: 'Mar 2018 - Feb 2020 ',
    duties: [
      'Developed a ecommerce wordpress website by utilized a power of WooCommerce pluggin',
      'Created several content materials for the website by benchmarking from the top 10 e-commerce platforms in Asia to generate monthly sales for the company.',
      'Managed paid and organic marketing on Google and Facebook using their advertising platforms on a total budget of 5 million VND.',
    ],
    company: 'Outdoorthrillz | Online',
  },
  {
    id: uuidv4(),
    order: 6,
    title: 'WEB DEVELOPER - Fulltime',
    dates: 'February 2019 - August 2019',
    duties: [
      'Developed a website with WordPress for an e-commerce company consisting of five primary members focusing on the sales of smartphones and accessories leading to a monthly revenue of 135 million Vietnamese Dong (VND).',
      'Created several content materials for the website by benchmarking from the top 10 e-commerce platforms in Asia to generate monthly sales for the company.',
      'Managed paid and organic marketing on Google and Facebook using their advertising platforms on a total budget of 5 million VND.',
    ],
    company: 'Thinh Vu Phu Kien | Ho Chi Minh City, Vietnam',
  },
];
