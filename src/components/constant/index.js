import html from "../../assets/tech/html.png"
import css from "../../assets/tech/css.png"
import javascript from "../../assets/tech/javascript.png"
import typescript from "../../assets/tech/typescript.png"
import reactjs from "../../assets/tech/reactjs.png"
import redux from "../../assets/tech/redux.png"
import tailwind from "../../assets/tech/tailwind.png"
import nodejs from "../../assets/tech/nodejs.png"
import mongodb from "../../assets/tech/mongodb.png"
import threejs from "../../assets/tech/threejs.svg"
import git from "../../assets/tech/git.png"
import figma from "../../assets/tech/figma.png"
import docker from "../../assets/tech/docker.png"

import work1 from "../../assets/works/work1.png"
import work2 from "../../assets/works/work2.png"
import work3 from "../../assets/works/work3.png"

import piano from "../../assets/img/piano.png";
import todo from "../../assets/img/todo.png";
import keeper from "../../assets/img/keeper.png";
import mateskin from "../../assets/img/mateskin.png";
import simon from "../../assets/img/simon.png";
import drum from "../../assets/img/drum.png";
const technologies = [
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const cards = [
  {
    projectName: "ACCOUNT EXECUTIVE'S PERSONAL PORTFOLIO",
    number: "001",
    link: "https://basilogast.github.io/NguyenDoThienAn/",
    description: "A personal portfolio for an account executive to display her projects for future employers",
    img: work1,
  },
  {
    projectName: "FTU2 GRADUATE'S PERSONAL PORTFOLIO",
    number: "002",
    link: "https://basilogast.github.io/NguyenQuynhAnhThu/",
    description: "A personal portfolio for a graduate to store her dedicated work for future applications",
    img: work2,
  },
  {
    projectName: "IT INTERN PERSONAL PORTFOLIO",
    number: "003",
    link: "https://basilogast.github.io/DuyHungPortfolio/",
    description: "A portfolio that helps an IT intern to get his dream job",
    img: work3,
  },
];

const projects = [
  {
    title: "Website Review",
    description: "I make sure your website is performing its best by thoroughly reviewing it before making any changes.",
    imgUrl: piano,
    link:"",
  },
  {
    title: "Business Strategy",
    description: "We discuss what you are trying to achieve, and place goals on your website planning how to achieve that.",
    imgUrl: todo,
    link:"",
  },
  {
    title: "User Experience Design",
    description: "I design your website to be as easy to use as possible while guiding users towards the end goal.",
    imgUrl: keeper,
    link:"",
  },
  {
    title: "Tailored Development",
    description: "I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.",
    imgUrl: mateskin,
    link:"",
  },
  {
    title: "Rigorous Testing",
    description: "I ensure your website is of excellent quality by thoroughly testing using multiple approaches.",
    imgUrl: simon,
    link:"",
  },
  {
    title: "Ongoing Support",
    description: "Your website is always growing. Whether you’re adding new features or making improvements I’m here to help.",
    imgUrl: drum,
    link:"",
  },
];


export {technologies, cards, projects};