// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import coding from './assets/company_logo/coding.png';
import internshala from './assets/company_logo/internshala.jpg';
import hmbt from './assets/company_logo/hmbt.jpg';

// Education Section Logo's
import PTU from './assets/education_logo/PTU.png';
import Board from './assets/education_logo/Board.png';


// Project Section Logo's
import resumeLogo from './assets/work_logo/resumeAts.png';
import AILogo from './assets/work_logo/AIAssistant.png';
import food from './assets/work_logo/food.png';

import deepfakeLogo from './assets/work_logo/deepfake.png';



// Skills Information
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
  // {
  //   title: 'Data Analyst',
  //   skills: [
  //     { name: 'Git', logo: gitLogo },
  //     { name: 'GitHub', logo: githubLogo },
  //     { name: 'VS Code', logo: vscodeLogo },
  //     { name: 'Postman', logo: postmanLogo },
  //     { name: 'Compass', logo: mcLogo },
  //     { name: 'Vercel', logo: vercelLogo },
  //     { name: 'Netlify', logo: netlifyLogo },
  //     { name: 'Figma', logo: figmaLogo },
  //   ],
  // },
];

// Experience, Education, and Projects data will be added here in a similar structure as SkillsInfo, with appropriate fields for each section.
  export const experiences = [
    {
      id: 0,
      img: coding,
      role: "Fullstack Developer",
      company: "Coding Seekho",
      date: "August 2024 - February 2025",
      certificate: "https://drive.google.com/file/d/1prF6wdz0vA5VIp0H-T-dPHRBQl63PlnF/view?usp=drive_link", // Replace with actual certificate link and Sometime ypu remove link
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Bootstrap",
      ],
    },
    {
      id: 1,
      img: internshala,
      role: "Machine Learning Intern",
      company: "Internshala",
      date: "March 2025 - May 2025",
      certificate: "https://drive.google.com/file/d/1jNv_GS6qkBW29NneAhoEHInZV6hAUfl0/view?usp=drive_link", // Replace with actual certificate link and Sometime ypu remove link
      desc: "Worked as a Machine Learning Intern, where I developed and implemented machine learning models to analyze and interpret complex datasets. Utilized Python libraries such as Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, and TensorFlow to preprocess data, build predictive models, and visualize results effectively.",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "TensorFlow",
        
      ],
    },
    {
      id: 2,
      img: hmbt,
      role: "Frontend Intern",
      company: "HummingByte Pvt. Ltd. , Nashik",
      date: "June 2025 - August 2025",
      certificate:"https://drive.google.com/file/d/1a2EaqQYndNxljgQU4RGwrMDwULwCd24J/view?usp=drive_link", // Replace with actual certificate link and Sometime ypu remove link
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "React JS",
        "Node JS",
        "MongoDB",
        "Material UI",
      ],
    }, 
    // You can add more experiences in the same format as above. Just make sure to update the id, img, role, company, date, desc, and skills fields accordingly.
  //     {
  //     id: 3,
  //     img: newtonschoolLogo,
  //     role: "Machine Learning",
  //     company: "Internshala",
  //     date: " March 2025 - June 2025",
  //     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "Javascript",
  //       "Bootstrap",
  //       "React JS",
  //       "Node JS",
  //       "MongoDB",
  //       "Material UI",
  //     ],
  //   },
   ];
  
  export const education = [
   
    {
      id: 0,
      img: PTU,
      school: "IKG Punjab Techenical University, Jalandhar",
      date: "August 2023 - June 2027",
      grade: "7.9 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (B.Tech) from  Punjab Techincal University, Jalandhar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Punjab Technical University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 1,
      img: Board,
      school: "Jagdam College, Bihar",
      date: "Apr 2020 - March 2022",
      grade: "77.6%",
      desc: "I completed my class 12 education from Jagdam College, Bihar, under the Bihar Board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "BSEB(XII) - PCM",
    },
    {
      id: 2,
      img: Board,
      school: "MD High School, Bihar",
      date: "Apr 2019 - March 2020",
      grade: "76.6%",
      desc: "I completed my class 10 education from MD High School, Bihar, under the Bihar Board, where I studied Science with Computer.",
      degree: "10th Standard - Science with Computer",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Food Management System",
      description:"Designed and developed a Food Management System using the React.js framework with a Node.js and Express.js backend and MongoDB for database management The system features a user-friendly UI that enables seamless food browsing, ordering, and management. Customer requirements were carefully analyzed to design intuitive workflows and improve overall user experience. check in Email id=test2312@gmail.com and Password= Test123456 ",
      image: food,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/mr-rahulmahto/Food-Management-System.git",
      webapp: "https://food-del-ciz1.onrender.com/",
    },
    {
      id: 1,
      title: "Resume ATS Analyzer",
      description:
        "Developed a Resume ATS Analyzer using React, Node.js, Bootstrap, CSS, and Firebase Authentication where users can upload resumes and provide job descriptions to calculate ATS compatibility scores and keyword matching analysis.",
      image: resumeLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Firebase", "HTML", "Bootstrap CSS", "Cohere API"],
      github: "https://github.com/mr-rahulmahto/Resume-ATS-Analyzer.git",
      webapp: "https://resume-ats-analyzer-forntend.onrender.com",
    },
    {
      id: 2,
      title: "Personal AI Assistant",
      description:
        "Developed a Personal AI Assistant as a standalone EXE application using Python, PyQt5, Pygame, Groq API, Cohere API, and Selenium for voice interaction, automation, and browser control.",

      image: AILogo,
      tags: ["Python", "PyQt5", "Groq Model", "Cohere API", "Selenium" , "pygame" , "OS" , "pywhatkit"],
      github: "https://github.com/mr-rahulmahto/Personal-AI-Assistant.git",
      webapp: "https://github.com/mr-rahulmahto/Personal-AI-Assistant.git",
    },
    {
      id: 3,
      title: "DeepFake Image & video Detector",
      description:
        "Built a Deepfake Detection SaaS platform using React, Tailwind CSS, and Supabase that analyzes AI-generated images and videos with secure authentication, real-time database management, and modern responsive UI.",

      image: deepfakeLogo,
      tags: ["React JS", "Node.js", "TypeScript", "Supabase" , "Tailwind CSS"],
      github: "https://github.com/mr-rahulmahto/DeepFake-image-video-Detector.git",
      webapp: "https://forensics-suite2.onrender.com/",
    }
    
  ];  