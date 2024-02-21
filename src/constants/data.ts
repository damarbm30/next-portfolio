import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import carRentalAdmin from "/public/car-rental-admin.jpg";
import carRentalUser from "/public/car-rental-user.jpg";
import dikata from "/public/dikata.jpg";
import tanyaKiai from "/public/tanya-kiai.jpg";
import damparan from "/public/damparan.jpg";

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
    description:
      "Creating landing page using React.js and Tailwind CSS for mobile interface only.",
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
      "Graduated after 4 months of studying. Learned a lot about CSS, JavaScript, and React.js.",
    icon: React.createElement(LuGraduationCap),
    date: "December 2022 - April 2023",
  },
  {
    title: "Front-End Engineer",
    location: "PT Widya Intelektual Bangsa - Sleman, Indonesia",
    description:
      "Developed websites using Vue.js, React.js and Next.js. Collaborate with cross-functional teams, including UX/UI designers and backend developers",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - Now",
  },
] as const;

export const projectsData = [
  {
    title: "Damparan",
    description:
      "Contain a list of pesantren in Special Region of Yogyakarta to help users find pesantren that matches their needs and preferences.",
    tags: ["React.js", "Tailwind CSS", "React Redux", "Redux Toolkit"],
    imageUrl: damparan,
    url: "https://pesantrenjogja.com",
  },
  {
    title: "Tanya Kiai",
    description: "A public web app to do QnA about Islam.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Context API",
      "Google OAuth",
    ],
    imageUrl: tanyaKiai,
    url: "https://tanyakiai.id",
  },
  {
    title: "Car Rental User",
    description: "A page to promote your car rental business.",
    tags: ["React.js", "Bootstrap", "Material UI", "Zustand"],
    imageUrl: carRentalUser,
    url: "https://bcr-platinum-user.vercel.app",
  },
  {
    title: "Car Rental Admin",
    description:
      "Dashboard with table and charts to show orders count with create, edit, and delete functionality to manage cars data.",
    tags: ["React.js", "Bootstrap", "Material UI", "Zustand"],
    imageUrl: carRentalAdmin,
    url: "https://bcr-platinum-admin.vercel.app",
  },
  {
    title: "Dikata",
    description:
      "A landing page for an educational organization which engages in literation awareness.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: dikata,
    url: "https://dikata.netlify.app",
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
