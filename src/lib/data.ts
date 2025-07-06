import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
  icon: IconType;
  text: string;
}

export const frontend_skills: Skill[] = [
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
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
    icon: SiTailwindcss,
    text: "Tailwind CSS",
  },
];

// We'll add more skill categories based on your resume
export const backend_skills: Skill[] = [
  {
    icon: SiNodedotjs,
    text: "Node.js",
  },
];

export const tools_and_platforms: Skill[] = [
  {
    icon: SiGit,
    text: "Git",
  },
];
