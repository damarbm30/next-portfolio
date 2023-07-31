import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import carRentalAdmin from "/public/car-rental-admin.jpg";
import carRentalUser from "/public/car-rental-user.jpg";
import dikata from "/public/dikata.jpg";
import tanyaKiai from "/public/tanya-kiai.jpg";

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
    name: "Experiences",
    hash: "#experiences",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern Front-End Developer",
    location: "Dikata - Online",
    description: "Creating landing page using React.js and Tailwind CSS for mobile interface only.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - August 2022",
  },
  {
    title: "Intern Front-End Developer",
    location: "Praxis Academy - Sleman, Special Region of Yogyakarta",
    description:
      "Studying front-end development for 4 months, then creating a real website project using React.js and Tailwind CSS for the remaining internship.",
    icon: React.createElement(FaReact),
    date: "August 2022 - January 2023",
  },
  {
    title: "Front-End Engineer Bootcamp",
    location: "Binar Academy - Online",
    description:
      "Graduated after 4 months of studying. I immediately found a job as a front-end developer. Learned a lot about CSS, JavaScript, and React.js.",
    icon: React.createElement(LuGraduationCap),
    date: "December 2022 - April 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Car Rental User",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React.js", "Bootstrap", "Material UI", "Zustand"],
    imageUrl: carRentalUser,
    url: "https://bcr-platinum-user.vercel.app",
  },
  {
    title: "Car Rental Admin",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React.js", "Bootstrap", "Material UI", "Zustand"],
    imageUrl: carRentalAdmin,
    url: "https://bcr-platinum-admin.vercel.app",
  },
  {
    title: "Dikata",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: dikata,
    url: "https://dikata.netlify.app",
  },
  {
    title: "Tanya Kiai",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Context API", "Google OAuth"],
    imageUrl: tanyaKiai,
    url: "https://tanyakiai.id",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Ant Design",
  "Bootstrap 5",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Redux",
  "Express.js",
  "Zustand",
] as const;
