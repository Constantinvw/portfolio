"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Projekt 1",
    type: "PRODUCT",
    bg: "#4169E1",
    // image: "/projects/projekt1.png",  ← Foto: einfach in public/projects/ ablegen und hier eintragen
  },
  {
    title: "Projekt 2",
    type: "PRODUCT",
    bg: "#FF6B00",
    // image: "/projects/projekt2.png",
  },
  {
    title: "Projekt 3",
    type: "LANDING PAGE",
    bg: "#1a1a1a",
    textLight: true,
    // image: "/projects/projekt3.png",
  },
  {
    title: "Projekt 4",
    type: "PRODUCT",
    bg: "#4169E1",
    // image: "/projects/projekt4.png",
  },
  {
    title: "Projekt 5",
    type: "SIDE PROJECT",
    bg: "#e8e8e8",
    // image: "/projects/projekt5.png",
  },
  {
    title: "Projekt 6",
    type: "DESIGN",
    bg: "#FF6B00",
    // image: "/projects/projekt6.png",
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
        className="w-full aspect-[4/3] rounded-sm mb-3 overflow-hidden relative transition-transform duration-300 group-hover:scale-[0.98]"
        style={{ background: project.bg }}
      >
        {"image" in project && project.image ? (
          <Image
            src={project.image as string}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className={`text-xs font-medium opacity-20 ${project.textLight ? "text-white" : "text-black"}`}>
              {project.title}
            </p>
          </div>
        )}
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
