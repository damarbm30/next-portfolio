"use client";

import { Fragment } from "react";

import { projectsData } from "@/constants/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/libs/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.33);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
