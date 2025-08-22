// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// // Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import CU from './assets/education_logo/CU.png';
import dav from './assets/education_logo/dav.png';

// Project Section Logo's
import ClimateEco from './assets/work_logo/climate_eco.png';
import ImageBackgroundRemover from './assets/work_logo/Image-bg.png';
import SchoolManagement from './assets/work_logo/School-Management.png';
import ResortManagement from './assets/work_logo/Resort-Management.png';
import SnakeGame from './assets/work_logo/Snake-game.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
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
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: CU,
      school: "Chandigarh University",
      date: "Aug 2022 - June 2026",
      grade: "7.00 CGPA",
      desc: "I am pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Chandigarh University. Throughout my academic journey, I have built a strong foundation in programming, software development, and computer science principles. I have studied core subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Software Engineering. Alongside academics, I have worked on several projects in web development and software applications, which helped me strengthen my practical skills. I have also participated in technical workshops and events that enhanced my problem-solving abilities and teamwork. My experience in this program has been pivotal in shaping both my technical expertise and professional growth.",
      degree: "Bachelors in Computer Science and Engineering, BE-CSE",
    },
    {
      id: 1,
      img: dav,
      school: "DAV Public School, Munger",
      date: "Sept 2019 - Aug 2021",
      grade: "76.2%",
      desc: "I have completed my Intermediate education in the PCM (Physics, Chemistry, Mathematics) stream from DAV Public School, Munger. My time at DAV helped me build a strong academic foundation, especially in logical thinking and problem-solving, which has been valuable in my journey ahead.",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: dav,
      school: "DAV Public School, Munger",
      date: "Apr 2018 - March 2019",
      grade: "68.6",
      desc: "I completed my class 10 education from DAV Public School, Munger, under the CBSE board, where I studied Science but also learned the lesson of discipline and friendship.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Climate Quiz Website",
      description:
        "An engaging and user-friendly React.js application designed to raise awareness about climate change through interactive quizzes. Users can test their knowledge on sustainability, global warming, and environmental practices, while learning key facts along the way. The clean interface, powered by React.js, TypeScript, and Tailwind CSS, ensures a seamless experience, making it an effective tool for education and awareness.",
      image: ClimateEco,
      tags: ["HTML", "tailwind CSS", "NPM Hosting", "React JS", "Typescript"],
      github: "https://github.com/TheArk-OG/Climate-Awareness-Quiz-App.git",
      webapp: "https://climate-awareness-quiz-app.vercel.app",
    },
    {
      id: 1,
      title: "Image Background Remover",
      description:
        "A simple and efficient Image Background Remover application that enables users to upload images and remove backgrounds instantly using API integration. Designed with a clean interface and smooth functionality, it provides a quick solution for editing images for personal and professional use.",
      image: ImageBackgroundRemover,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/TheArk-OG/Image-Background-Remover.git",
      webapp: "https://image-background-remover-mauve.vercel.app/",
    },
    {
      id: 2,
      title: "School Management System",
      description:
        "A desktop-based School Management System developed using Java Swing and MySQL, designed to streamline administrative tasks such as student enrollment, attendance tracking, teacher management, and fee records. Built in Apache NetBeans, the system provides an intuitive interface with efficient database integration, making school operations more organized and accessible.",
      image: SchoolManagement,
      tags: ["Java swing", "MySql JDBC", "HTML","Apache Netbeans"],
      github: "https://github.com/TheArk-OG/School-Management-system-in-java.git",
      webapp: "https://github.com/TheArk-OG/School-Management-system-in-java.git",
    },
    {
      id: 3,
      title: "Resort Management System",
      description:
        "A web-based Resort Management System developed using PHP, HTML, CSS, JavaScript, and MySQL to streamline resort operations. The system features room booking, customer management, billing, and an admin dashboard for efficient control. With a responsive interface and secure database integration, it ensures a smooth experience for both staff and customers.",
      image: ResortManagement,
      tags: ["PHP","MySql", "XAMPP", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/TheArk-OG/Online-Resort-Management-System.git",
      webapp: "",
    },
    {
      id: 4,
      title: "Java Snake Game",
      description:
        "A classic Snake Game built using Java in Apache NetBeans, featuring smooth keyboard controls, real-time score tracking, food spawning, and collision detection. The project demonstrates event-driven programming and GUI development, offering a retro arcade experience in a simple desktop application.",
      image: SnakeGame,
      tags: ["Java","Apache Netbeans"],
      github: "https://github.com/TheArk-OG/Java-Snake-Game.git",
      webapp: "https://github.com/TheArk-OG/Java-Snake-Game.git",
    },

  ];  