"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/libs/hooks";
import SectionHeading from "./section-heading";
import { skillsData } from "@/constants/data";

const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="rounded-xl border border-black/10 bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
