import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiVite,
  SiFigma,
  SiPhp,
  SiPython,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiExpress,
  SiDjango,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

/* =========================================
   PERSONAL INFORMATION
========================================= */

export const site = {
  name: "Nuha Nazardeen",
  role: "Full-Stack Developer ",
  bio: "Computer Science and Technology undergraduate at Uva Wellassa University, passionate about building responsive web applications and practical software solutions using modern web technologies.",
  email: "nuhanazardeen1234@gmail.com",
  location: "Sri Lanka",
  cvUrl: "/cv.pdf",
  // Add your Formspree endpoint after creating a Formspree form.
  formspreeEndpoint: "",
};

/* =========================================
   ABOUT ME
========================================= */

export const about = {
  paragraphs: [
    "I am a Computer Science and Technology undergraduate at Uva Wellassa University with hands-on experience in frontend and full-stack development through individual and collaborative projects.",
    "I have worked with technologies including React.js, Next.js, TypeScript, Node.js, Express.js, PHP, and MongoDB. My academic projects have helped me gain experience in building user interfaces, developing application functionality, working with databases, and testing software.",
    "I enjoy learning new technologies, solving practical problems, and collaborating with others to build useful applications. I am currently looking for an opportunity to strengthen my full-stack development skills through real-world industry experience.",
  ],
};

/* =========================================
   PROJECTS
========================================= */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo?: string;
  github: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "IT Path",
    description:
      "A collaborative academic and career management platform designed to help IT undergraduates manage academic progress, career roadmaps, projects, and workloads. Contributed to authentication, role-based access, dashboard development, and software testing.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
    ],
    image: "/placeholder.svg",
    demo: "",
    github: "",
  },
  {
    title: "AgriGrowthRate",
    description:
      "A collaborative smart agriculture platform connecting farmers, consumers, and retailers through a multilingual web application. Focused on developing the administrator dashboard and contributing to related frontend and backend functionality.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Django",
    ],
    image: "/placeholder.svg",
    demo: "",
    github: "",
  },
  {
    title: "LiveOn",
    description:
      "A blood donation management system developed as a frontend project. Created responsive user interfaces for donor registration, blood availability information, and blood request workflows using React.",
    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Frontend Development",
    ],
    image: "/placeholder.svg",
    demo: "",
    github: "",
  },
  {
    title: "ResolveX",
    description:
      "An individual full-stack project currently in progress, focused on building an enterprise IT service management platform for handling incidents, service requests, and support workflows. The planned system includes employee, support agent, and administrator roles.",
    tags: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
    ],
    image: "/placeholder.svg",
    status: "In Progress",
    github: "",
  },
];

/* =========================================
   TECHNICAL SKILLS
========================================= */

export type Skill = {
  name: string;
  Icon: IconType;
};

export const skills: Skill[] = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React.js", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "Java", Icon: FaJava },
  { name: "PHP", Icon: SiPhp },
  { name: "Python", Icon: SiPython },
  { name: "Django", Icon: SiDjango },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "Git", Icon: SiGit },
  { name: "Vite", Icon: SiVite },
  { name: "Figma", Icon: SiFigma },
];

/* =========================================
   SOCIAL LINKS
========================================= */

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Nuha-Nazardeen",
    Icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nuha-nazardeen",
    Icon: FiLinkedin,
  },
  {
    name: "Email",
    href: "mailto:nuhanazardeen1234@gmail.com",
    Icon: FiMail,
  },
];

/* =========================================
   NAVIGATION
========================================= */

export const nav = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
