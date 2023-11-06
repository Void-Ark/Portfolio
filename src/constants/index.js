import {
  mobile,
  backend,
  creator,
  ML,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  coincent, 
  codeclause,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  fastapi,
  postgresql,
  tensorflow,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML Developer",
    icon: ML,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "FastAPI Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "fastapi",
    icon: fastapi,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
//  {
//    name: "tensorflow",
//    icon: tensorflow,
//  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
//  {
//    name: "TypeScript",
//    icon: typescript,
//  },
  {
    name: "React JS",
    icon: reactjs,
  },
//  {
//    name: "Redux Toolkit",
//    icon: redux,
//  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
//  {
//    name: "Node JS",
//    icon: nodejs,
//  },
//  {
//    name: "MongoDB",
//    icon: mongodb,
//  },
//  {
//    name: "Three JS",
//    icon: threejs,
//  },
  {
    name: "git",
    icon: git,
  },
//  {
//    name: "figma",
//    icon: figma,
//  },
//  {
//    name: "docker",
//    icon: docker,
//  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Coincent",
    icon: coincent,
    iconBg: "#383E56",
    date: "September 2022 - October 2022",
    points: [
      "Done Real-life Implementation of various Machine Learning Algorithms on datasets for the Recognition and Analysis of the programs",
      "Worked on NLP(Natural Language Processing) that acts as a bridge between the Human and the Machines.",
      "Implemented Self-driving vehicle model using Tensorflow.",
      "Tech Stack: Python, Jupyter, sklearn, NLTK, TensorFlow, Pandas, Numpy",
    ],
  },
  {
    title: "Python Developer Intern",
    company_name: "Code Clause",
    icon: codeclause,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Developed Graphical User Interface using Python and its related libraries.",
      "Make User Interface using UI libraries of Python.",
      "Implemented responsive design and ensuring simplicity.",
      "Tech Stack: Python, PyGame, etc",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "OpenUp-Ark",
    description:
      "It is a social web app in which users can share there thoughts and gets likes by another user.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Void-Ark/OpenUp-Ark",
  },
  {
    name: "ReviseArk",
    description:
      "It is a web app in which user can save questions answer to learn it. This app will revise those question after limited period of gap and this gap increases as the proficiency increases.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Void-Ark/ReviseArk",
  }
];

export { services, technologies, experiences, testimonials, projects };
