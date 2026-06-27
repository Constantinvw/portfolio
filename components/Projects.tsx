"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "AI Second Brain — Nova",
    type: "PRODUCT",
    bg: "#4169E1",
    description: "A self-organizing second brain powered by AI.",
  },
  {
    title: "Shitcheck.com",
    type: "PRODUCT",
    bg: "#FF6B00",
    description: "Validate your startup idea before wasting time on it.",
  },
  {
    title: "Reflecta.so",
    type: "LANDING PAGE",
    bg: "#1a1a1a",
    description: "Your personal operating system.",
    textLight: true,
  },
  {
    title: "Project Four",
    type: "PRODUCT",
    bg: "#4169E1",
    description: "Coming soon.",
  },
  {
    title: "Project Five",
    type: "SIDE PROJECT",
    bg: "#e8e8e8",
    description: "In progress.",
  },
  {
    title: "Project Six",
    type: "DESIGN",
    bg: "#FF6B00",
    description: "Creative direction.",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group cursor-pointer"
    >
      <div
        className="w-full aspect-[4/3] rounded-sm mb-3 overflow-hidden relative flex items-center justify-center transition-transform duration-300 group-hover:scale-[0.98]"
        style={{ background: project.bg }}
      >
        <p
          className={`text-xs font-medium opacity-30 ${
            project.textLight ? "text-white" : "text-black"
          }`}
        >
          {project.title}
        </p>
      </div>
      <p className="text-sm font-medium">{project.title}</p>
      <p className="text-xs text-gray-400 mt-0.5">{project.type}</p>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="px-5 pb-24">
      <p className="text-xs text-gray-400 mb-6 tracking-wide">↓ Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
