import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Evelyn Nguyen | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

export const navBarData = {
  link1: '',
}

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Evelyn Nguyen',
  subtitle: 'Developer and entrepreneur for social good',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Headshot.jpg',
  paragraphOne: 'I am a software developer passionate about using technology to solve social problems. Issues I care about include mental health advocacy, accessible healthcare, environmental sustainability, education, and DEI (Diversity, Inclusion & Equity).',
  paragraphTwo: 'In my free time, I enjoy reading fiction and self-help books. Nonfiction topics I enjoy reading about include history, culture, society, politics, economics, technology, and psychology. I also enjoy writing, crafting, and working out.',
  paragraphThree: "I'm always open to connecting on future projects.",
  resume: 'https://docs.google.com/document/d/1cHRLwCGccZ3KD2xfvLOkqtrKpqVCtmZaOjzaJiQCXgw/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CV_Hero.jpg',
    title: 'Camino Verde Trees Directory',
    info: 'A directory of Amazonian plant species with data from Airtable. Users can filter through the results with a search prompt and category tags.',
    info2: 'Technologies used: React.js, Node.js, CSS.',
    url: 'https://cvtreedatabase.netlify.app/',
    repo: 'https://github.com/ENguyen25/trees-directory', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'happening-atm-scrnsht.jpg',
    title: 'Happening ATM',
    info: 'City council agenda app that allows meeting participants to "subscribe" to meeting items for notifications via text or email. Participants will benefit greatly from a notification system rather than be on stand-by for an undetermined length of time.',
    info2: 'Technologies used: React.js, Node.js, PostgresQL, SCSS, Docker',
    url: '',
    repo: 'https://github.com/ENguyen25/project-happening-atm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tierlist.jpg',
    title: 'Know More Tiers',
    info: 'In the online world, people meet each other by swiping left or right on online profiles, or face billions of communities where meeting individuals is difficult. "Know More Tiers" is a friendship app that connects people together based on common interests.',
    info2: 'Technologies used: React.js, Node.js, SCSS',
    url: 'https://glacial-plains-58535.herokuapp.com/',
    repo: 'https://github.com/ENguyen25/know-more-tiers', // if no repo, the button will not show up
  },
];

// SKILLS DATA
export const skillsData = {
  skill1: 'hello world',
};

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'enguyen6208@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/evelyn-ngoc-nguyen',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ENguyen25',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
