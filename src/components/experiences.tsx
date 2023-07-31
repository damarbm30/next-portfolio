"use client";

import { Fragment } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSectionInView } from "@/libs/hooks";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/constants/data";
import { useTheme } from "@/contexts/theme-context";

export default function Experiences() {
  const { ref } = useSectionInView("Experiences");
  const { theme } = useTheme();

  return (
    <section id="experiences" ref={ref} className="mb-20 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#030712",
                padding: "0.25rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="!mt-0 font-normal">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{experience.description}</p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
