"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/libs/hooks";
import avatar from "/public/avatar.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section id="home" ref={ref} className="mb-28 max-w-[50rem] scroll-mt-96 text-center sm:mb-0">
      {/* avatar */}
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* next image will automatically set the local image width and height */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={avatar}
              width={192}
              height={192}
              quality={95}
              priority
              alt="Damar Buana Murti avatar"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-3xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Damar.</span> I'm a&nbsp;
        <span className="font-bold">front-end developer</span> with <span className="font-bold">1 year</span> of
        experience. I enjoy building <span className="italic">sites & apps</span>. My focus is&nbsp;
        <span className="underline">React.js (Next.js)</span>
      </motion.h1>
      {/* buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg sm:flex-row"
      >
        <a
          href="/resume.pdf"
          download
          className="group flex cursor-pointer items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110"
        >
          My Resume <HiDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/damar-murti/"
          target="_blank"
          className="bg- flex cursor-pointer items-center gap-2 rounded-full border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/damarbm30"
          target="_blank"
          className="bg- flex cursor-pointer items-center gap-2 rounded-full border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
