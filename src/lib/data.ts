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

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  points: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Pet Health Tracker",
    description: "A comprehensive pet health monitoring platform designed to help pet owners track, visualize, and manage their pets' well-being through an intuitive and modern interface.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "CSS"],
    points: [
      "Implemented a modern single-page application using React and Node.js with responsive design",
      "Built a robust REST API system with PostgreSQL for scalable data management",
      "Created dynamic data visualization components for health trend analysis",
      "Designed an intuitive user interface with color-coded elements for improved UX"
    ],
    github: "https://github.com/Rainbowfish-Tech-Collab/Pet-Health-Tracker",
  },
  {
    title: "Nature's Edge Wildlife Rescue Portal",
    description: "A Ruby on Rails donor management system built during the 2024 Opportunity Hack hackathon for Nature's Edge Wildlife and Reptile Rescue, featuring modern UI with Tailwind CSS and PostgreSQL database.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "RSpec", "Devise"],
    points: [
      "Collaborated with a team of 5 developers to build a full-featured donor management system in under 24 hours",
      "Implemented responsive UI components using Rails partials and Tailwind CSS best practices",
      "Set up comprehensive test infrastructure using RSpec, FactoryBot, and Email Spec",
      "Integrated payment processing and email service APIs for automated donor communications"
    ],
    github: "https://github.com/2024-Arizona-Opportunity-Hack/HeatSyncers-Nature-sEdgeWildlife-Nature-sEdgeWildlifeandReptileRescueDigitalTransformation",
  }
];

export interface Photo {
  src: string;
  caption: string;
  event?: string;
}

export const photos: Photo[] = [
  {
    src: "/images/OpportunityHack_img1.jpg",
    caption: "Collaborating at Opportunity Hack 2024",
    event: "Opportunity Hack 2024"
  },
  {
    src: "/images/OpportunityHack_img2.jpg",
    caption: "Working with the team at Opportunity Hack",
    event: "Opportunity Hack 2024"
  },
  {
    src: "/images/VolunteeringWithKatyPride.JPG",
    caption: "Volunteering with Katy Pride",
    event: "Katy Pride"
  },
  {
    src: "/images/WalkingInPrideParadeWithJonRosenthal.png",
    caption: "Walking in Pride Parade with Jon Rosenthal",
    event: "Pride Parade"
  }
];

export const contactLinks = {
  github: "https://github.com/robinallenaz",
  linkedin: "https://www.linkedin.com/in/robin-allen-az/",
  email: "robinallenaz@gmail.com"
};

export const aboutYou = {
  location: "Katy, TX",
  email: "robin.allen.az@gmail.com",
  github: "https://github.com/robinallenaz",
  linkedin: "https://www.linkedin.com/in/robin-allen-software-engineer",
};
