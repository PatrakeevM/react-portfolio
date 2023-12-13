import project1 from "/img/projects/01.jpg";
import project1Big from "/img/projects/01-big.jpg";
import project2 from "/img/projects/02.jpg";
import project2Big from "/img/projects/02-big.jpg";
import project3 from "/img/projects/03.jpg";
import project3Big from "/img/projects/03-big.jpg";

const projects = [
  {
    img: project1,
    imgBig: project1Big,
    title: "Frontend Portfolio",
    skills: "React, react-router, SCSS, CSS.modules",
    gitHubLink: "https://github.com/PatrakeevM/react-portfolio",
  },
  {
    img: project2,
    imgBig: project2Big,
    title: "Music App",
    skills: "React, MaterialUI, SCSS, CSS.modules",
    gitHubLink: "https://github.com/PatrakeevM/react-music-app",
    projectLink: "https://react-mus-app.netlify.app",
  },
  {
    img: project3,
    imgBig: project3Big,
    title: "Food Delivery",
    skills: "React, RTK, TypeScript, react-content-loader, SCSS, CSS.modules",
    gitHubLink: "https://github.com/PatrakeevM/react-pizza",
    projectLink: "https://react-pizza-patrakeev.netlify.app",
  },
];

export default projects;
