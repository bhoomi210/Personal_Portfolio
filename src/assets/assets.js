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
    title: "Stock Market price prediction webapp",
    description: "A stock market price prediction webapp uses machine learning algorithms (e.g., LSTM, Random Forest)  to forecast future stock trends based on historical data.",
    image: projectImg1,
    tech: ["python","Streamlit","Machine-learning","LSTM"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Grocify-Website",
    description: "A ReactJS-based Grocify website is a modern, responsive e-commerce application designed for online grocery shopping, component-based user interface.",
    image: projectImg2,
    tech: ["React.JS", "Firebase", "Tailwind CSS", "Javascript"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Smart Virtual Assistant",
    description: "A smart virtual assistant built with Python is an AI-powered software application designed to understand natural language, interpret user commands via voice or text, and automate tasks.",
    image: projectImg3,
    tech: ["Python", "OpenAI API", "Pyttsx3", "NLP"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support. It typically includes everything about my skills and works.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "AI-HealthMate",
    description: "AI HealthMate is an AI-powered, designed to act as a preliminary health assistant, symptom analysis, while often bridging the gap between patients and medical professionals.",
    image: projectImg5,
    tech: ["Python", "API", "Streamlit", "frameworks"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "Coffee-Website",
    description: "A coffee website built using HTML, CSS, and JavaScript is a responsive, visually appealing web presence that informs customers about the coffee shop's offerings and brand story.",
    image: projectImg6,
    tech: ["html", "css", "JavaScript", "Bootstrap"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
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
  }
];
