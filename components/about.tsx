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
      className="mb-14 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-6">
        With a background in Computer Science and a growing passion for education, I’m committed to creating engaging, inclusive, and learner-centered environments that inspire diverse students.
      </p>

      <p className="mb-6">
        While working as a software developer, I’ve been actively transitioning into teaching. Currently, I’m leading sessions in my English Speaking Club, preparing tailored lesson materials, and continuously reflecting on how to improve the learning experience. I love designing lessons that foster creativity, openness, and compassion, and I enjoy bringing in fresh ideas while giving learners the space to express themselves and support one another.
      </p>

      <p className="mb-6">
        In the near future, I aim to pursue a Master’s degree in Education, with a focus on the intersection of pedagogy and technology. Looking ahead, I hope to deepen my understanding of educational leadership and policy to help shape more equitable and effective learning systems. I see education as a lifelong journey: one that  begins at birth and continues throughout life. I’m eager to share my passion for education with others.
      </p>
    </motion.section>
  );
}
