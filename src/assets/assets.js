import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project1.jpg'
import projectImg3 from '../assets/project2.webp';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/health.webp';
import projectImg6 from '../assets/coffee.avif';


export const assets = {
    profileImg,
}

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'CSS', 'HTML', 'JavaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Python']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS','CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack']
  }
];

export const projects = [
  {
    title: "Real-time News Aggregator Web App",
    description: "A real-time news aggregator using Node.js is a high-performance system designed to collect, process, and display news updates from various sources as they happen.",
    image: projectImg1,
    tech: ["Nodejs","Expressjs","API","Backend"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://real-time-news-aggregator-ashy.vercel.app/",
    code: "https://github.com/bhoomi210/Real-time-News-Aggregator",
  },
  {
    title: "Grocify-Website",
    description: "A ReactJS-based Grocify website is a modern, responsive e-commerce application designed for online grocery shopping, component-based user interface.",
    image: projectImg2,
    tech: ["React.JS", "Firebase", "Tailwind CSS", "Javascript"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "https://github.com/bhoomi210/Grocify-Website",
  },
  {
    title: "Smart Virtual Assistant",
    description: "A smart virtual assistant built with Python is an AI-powered software application designed to understand natural language, interpret user commands via voice or text, and automate tasks.",
    image: projectImg3,
    tech: ["Python", "OpenAI API", "Pyttsx3", "NLP"],
    icons: [FaReact, FaDatabase],
    demo: "https://shifra-voice-assistant.vercel.app/",
    code: "https://github.com/bhoomi210/Shifra_Voice_Assistant",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support. It typically includes everything about my skills and works.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "https://my-portfolio-six-silk-27.vercel.app/",
    code: "https://github.com/bhoomi210/My-Portfolio",
  },
  {
    title: "AI-HealthMate",
    description: "AI HealthMate is an AI-powered, designed to act as a preliminary health assistant, symptom analysis, while often bridging the gap between patients and medical professionals.",
    image: projectImg5,
    tech: ["Python", "API", "Streamlit", "frameworks"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://aihealthmate-ctcj7p2itzqvcrwqpzzpee.streamlit.app/",
    code: "https://github.com/bhoomi210/_AI_HealthMate/",
  },
  {
    title: "Coffee-Website",
    description: "A coffee website built using HTML, CSS, and JavaScript is a responsive, visually appealing web presence that informs customers about the coffee shop's offerings and brand story.",
    image: projectImg6,
    tech: ["html", "css", "JavaScript", "Bootstrap"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://coffee-website-seven-lilac.vercel.app/",
    code: "https://github.com/bhoomi210/Coffee_Website",
  }
];

export const workData = [
  {
    role: "Python developer Intern",
    company: "Mamo Technolab LLp",
    duration: "4 Months",
    description:
      "Started my career building basic websites & webapps and gradually took on more complex projects as I expected my skill set.",
    color: "purple"
  },
  {
    role: "Mern stack developer trainee",
    company: "Amar Infotech",
    duration: "9 Months",
    description: "During my MERN Stack training at a company,I worked on projects involving frontend development with reactjs & backend development with nodejs and expressjs and database management with mongodb.I implemented CRUD operation, user authentication, RESTful APIs and responsive UI designs. This training enhanced my understanding of software development workflows, version control using Git, and teamwork in a professional environment."
  }
];