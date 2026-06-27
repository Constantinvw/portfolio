"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import ProjectModal, { type Project } from "./ProjectModal";

// ── EDIT YOUR PROJECTS HERE ──────────────────────────────────────────────────
const projects: Project[] = [
  {
    title: "Efsyco",
    type: "STARTUP · FOUNDER",
    bg: "#111111",
    textLight: true,
    images: ["/projects/efsyco1.1.png", "/projects/efsyco1.2.jpeg"],
    year: "2025–",
    description:
      "Co-founding Efsyco, building autonomous fixed-wing aerial solutions that operate reliably where GPS fails — across inspection, infrastructure, and other demanding use cases. Early days, moving fast.",
  },
  {
    title: "TEAM MALIZIA",
    type: "NAVAL ENGINEERING",
    bg: "#0a1628",
    textLight: true,
    images: ["/projects/malizia1.1.jpeg", "/projects/malizia1.2.jpeg"],
    year: "2026",
    description:
      "Part of the technical team for the new Malizia IMOCA Seaxplorer 4, contributing to design and construction ahead of the launch and the Ocean Race Atlantic in New York.",
  },
  {
    title: "SWARM · Aris ETH",
    type: "UNDERWATER ROBOTICS",
    bg: "#0d2233",
    textLight: true,
    images: ["/projects/swarm1.1.jpeg", "/projects/swarm1.2.jpeg", "/projects/swarm1.3.jpeg"],
    year: "2024–2025",
    description:
      "Controls & Hardware Engineer and Head of Sponsorships for SWARM, an autonomous multi-agent underwater system developed at ETH Zürich as part of the Aris Focus Project.",
  },
  {
    title: "Tethys Robotics",
    type: "BACHELOR THESIS",
    bg: "#1a3a5c",
    textLight: true,
    images: ["/projects/tethys1.1.png", "/projects/tethys1.2.jpg"],
    year: "2025",
    description:
      "Bachelor's thesis on visual SLAM for underwater robotics at Tethys Robotics, in collaboration with the Mobile Robotics Lab at ETH Zürich, building on the SWARM focus project.",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div
        className="w-full aspect-[4/3] rounded-xl mb-2.5 overflow-hidden relative transition-transform duration-300 group-hover:scale-[0.97]"
        style={{ background: project.bg }}
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm font-medium">{project.title}</p>
      <p className="text-xs text-gray-400 mt-0.5">{project.type}</p>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section className="px-5 pt-24 pb-24">
        <p className="text-xs text-gray-400 mb-8 tracking-wide">↓ Projects</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-w-2xl">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
