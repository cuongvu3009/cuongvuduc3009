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

export const products = [
  {
    id: 1,
    img: blog,
    demo: 'https://blog3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/mdx-blog',
    name: 'MDX blog',
    tech: 'React, Gatsby, Markdown',
    desc: 'Blog App using Gatsby, Markdown',
  },
  {
    id: 2,
    img: chatDemo,
    demo: 'https://chat-app-3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/chatApp',
    name: 'Chat App',
    tech: 'React, ChatEngine',
    desc: 'Simple Chat app using ChatEngine.io',
  },
  {
    id: 3,
    img: searchCoctails,
    demo: 'https://search-4-cocktails.netlify.app/',
    repo: 'https://github.com/cuongvu3009/ultimate-cocktails-db',
    name: 'Search Cocktails',
    tech: 'React, Context Api',
    desc: 'Simple search cocktail app using https://www.thecocktaildb.com/ api, that fetch cocktails recipe bases on custom search',
  },
  {
    id: 4,
    img: hackernews,
    demo: 'https://hackernews3009.netlify.app/',
    repo: 'http://github.com/cuongvu3009/hacker-news',
    name: 'Hacker news',
    tech: 'React, Redux',
    desc: 'Study redux by making a simple hacker news, which fetch api from https://hn.algolia.com/api/v1',
  },
  {
    id: 5,
    img: recipes,
    demo: 'https://recipes3009.netlify.app/about',
    repo: 'http://github.com/cuongvu3009/simply-recipes',
    name: 'Simply Recipes',
    tech: 'React, Gatsby, JS',
    desc: 'Gatsby website',
  },
  {
    id: 6,
    img: realEstate,
    demo: 'https://real-estate-3009.vercel.app/',
    repo: 'https://github.com/cuongvu3009/real-estate',
    name: 'Realtor',
    tech: 'React, Next',
    desc: 'Study Next by making a real estate website. The api is provided by rapidapi',
  },
  {
    id: 7,
    img: github,
    demo: 'https://github-3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/Github-3009',
    name: 'Github finder',
    tech: 'React, auth0, Fusion Charts, Context API',
    desc: 'Search any github user profile at ease. This website includes authentication which powered by auth0. The api is provided by https://api.github.com',
  },
  {
    id: 8,
    img: store,
    demo: 'https://store-3009.netlify.app/',
    repo: 'https://github.com/cuongvu3009/store',
    name: 'Ecommerce website',
    tech: 'React, auth0, Stripe, Context API, Netlify cli',
    desc: 'Ecommerce website which utilize stripe for payment, and auth0 for authentication. The main skeleton of state management is backed by context api.',
  },
  {
    id: 9,
    img: job,
    demo: 'https://job-3009.herokuapp.com/',
    repo: 'https://github.com/cuongvu3009/jobify',
    name: 'Job website',
    tech: 'React, JWT, Mongodb, Context API, Heroku, Node, Express',
    desc: 'Job search website with authentication, analysis dashboard, and add job features',
  },
  {
    id: 10,
    img: blogMega,
    demo: 'https://blog-3009.herokuapp.com/',
    repo: 'https://github.com/cuongvu3009/blog3009',
    name: 'Blog website',
    tech: 'React, JWT, Mongodb, Context API, Heroku, Node, Express',
    desc: 'Blog website with authentication, and add blog',
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
    img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png',
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
