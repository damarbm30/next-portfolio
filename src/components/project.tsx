"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

import { projectsData } from "@/constants/data";

// use the exactly same data from projectsData as a type
type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, url }: ProjectProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // animation start when bottom of viewport (0) meet the top of the target (1)
    // animation end when bottom of viewport has gone 33% (1.33) beyond the last part of the target (1)
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      ref={ref}
      style={{
        scale,
        opacity,
      }}
      className="group relative mb-3 max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 last:mb-0 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 sm:mb-8 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 transition sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          {/* mt-auto will max the top margin if the parent element is flex with some space left */}
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {/* no need to set width and height if image is local */}
        {/* need to add group-even to detect if it's even or odd based on its parent */}
        {/* group-hover will triggered if the parent with the group class is hovered */}
        <Image
          src={imageUrl}
          alt={`${title} is one of my finished projects`}
          quality={95}
          className="absolute -right-40 top-8 hidden min-h-full w-[28.25rem] rounded-t-md object-cover shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:-translate-y-3 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 sm:block"
        />
      </a>
    </motion.article>
  );
}
