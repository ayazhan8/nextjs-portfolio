"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-bold">Computer Science</span> graduate, who
        decided to pursue a career in{" "}
        <span className="font-bold">frontend development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        solving problems, learning new things, and learning new ways of doing
        things using different technologies. My core stack is{" "}
        <span className="font-bold">React, Next.js, and TypeScript. </span>
        <span className="font-normal">
          I'm keen for continuous learning in web development. Currently, I am
          learning{" "}
        </span>
        <span className="font-bold">backend development tools </span>
        as I would like to become a full-stack developer in the future. Now, I
        am looking for a <span className="font-bold">
          full-time position
        </span>{" "}
        as a software developer / frontend developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        traveling, reading, walking, and learning new things (especially
        languages). I am currently learning{" "}
        <span className="font-bold">Spanish and Arabic</span>.
      </p>
    </motion.section>
  );
}
