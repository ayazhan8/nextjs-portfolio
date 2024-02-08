import fullStackImg from "@/public/full-stack.png";
import React from "react";
import { FaReact } from "react-icons/fa";
import { LuDatabase, LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Project1",
    description:
      "Weather app with AI integration. AI uses data from WeatherAPI to generate a forecast for the day.",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: fullStackImg,
  },
  {
    title: "Project2",
    description:
      "Personal blog website. It has features like filtering and sorting posts and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: fullStackImg,
  },
  {
    title: "Project3",
    description:
      "Full-stack e-commerce app with features like cart shopping, filtering, sorting, searching for products, etc.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: fullStackImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "SQL",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Graduated with a CS Degree",
    location: "Almaty, Kazakhstan",
    description:
      "Graduated with a CS degree from one of the top universities in my country.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Frontend Developer",
    location: "Almaty, Kazakhstan",
    description:
      "I worked as a front-end developer for a year in a fast-paced startup environment. My stack included React, Next.js, TypeScript, and Tailwind.",
    icon: React.createElement(FaReact),
    date: "2022-2023",
  },
  {
    title: "Frontend Developer Intern",
    location: "Almaty, Kazakhstan",
    description:
      "Created chat app using MERN stack (MongoDB, Express, React, Node) and TypeScript. Learned about topics such as UI/UX (User Interface / User Experience) development, DevOps basics, project management, testing and debugging.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Data Engineering Intern",
    location: "Almaty, Kazakhstan",
    description:
      "Created SQL scripts for daily extracts and reporting and optimised SQL queries.",
    icon: React.createElement(LuDatabase),
    date: "2021",
  },
] as const;
