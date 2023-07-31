"use client";

import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/libs/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating from <span className="font-medium">Gadjah Mada University</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect and when I learn
        new concepts. I love the feeling of finally figuring out a solution to a problem.
      </p>
      <p className="mb-3">
        My core stack is <span className="font-medium">React.js, Next.js, and Node.js</span>. I am always looking to
        learn new technologies. I am currently looking for a <span className="font-medium">full-time position</span> as
        a software developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing video games, watching movies, and
        reading some articles. I also enjoy <span className="font-medium">learning new things</span>. I&apos;m currently
        learning for Next.js 13 and TypeScript.
      </p>
    </motion.section>
  );
}
