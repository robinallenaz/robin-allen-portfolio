import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNpm,
  SiGit,
  SiRedux,
  SiAzuredevops,
  SiJira,
  SiFigma,
  SiPython,
  SiRubyonrails,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
  icon: IconType;
  text: string;
}

export const frontend_skills: Skill[] = [
  {
    icon: SiReact,
    text: "React.js",
  },
  {
    icon: SiJavascript,
    text: "JavaScript (ES6+)",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
];

export const backend_skills: Skill[] = [
  {
    icon: SiNodedotjs,
    text: "Node.js",
  },
  {
    icon: SiExpress,
    text: "Express.js",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiRubyonrails,
    text: "Ruby on Rails",
  },
];

export const tools_and_platforms: Skill[] = [
  {
    icon: SiGit,
    text: "Git & GitHub",
  },
  {
    icon: SiNpm,
    text: "npm",
  },
  {
    icon: SiAzuredevops,
    text: "Azure DevOps",
  },
  {
    icon: SiJira,
    text: "Jira",
  },
  {
    icon: SiFigma,
    text: "Figma",
  },
];
