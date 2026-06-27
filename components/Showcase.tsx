"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ProjectModal, { type Project } from "./ProjectModal";

const showcaseProjects: Project[] = [
  {
    title: "Efsyco",
    label: "AUTONOMOUS DRONES · STARTUP",
    images: ["/projects/efsyco1.1.png", "/projects/efsyco1.2.jpeg"],
    bg: "#111111",
    type: "STARTUP · FOUNDER",
    year: "2025–",
    description:
      "Co-founding Efsyco, building autonomous fixed-wing aerial solutions that operate reliably where GPS fails — across inspection, infrastructure, and other demanding use cases. Early days, moving fast.",
  },
  {
    title: "TEAM MALIZIA",
    label: "NAVAL ENGINEERING · OCEAN RACE 2026",
    images: ["/projects/malizia1.1.jpg", "/projects/malizia1.2.jpeg"],
    bg: "#0a1628",
    type: "NAVAL ENGINEERING",
    year: "2026",
    description:
      "Part of the technical team for the new Malizia IMOCA Seaxplorer 4, contributing to design and construction ahead of the launch and the Ocean Race Atlantic in New York.",
  },
];

function ShowcaseCard({
  project,
  onClick,
}: {
  project: (typeof showcaseProjects)[0];
  onClick: () => void;
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45], [0.82, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[150vh] md:h-[180vh]">
      <div className="sticky top-0 h-screen flex items-center px-5 md:px-10">
        <motion.div
          onClick={onClick}
          style={{ scale, opacity, aspectRatio: "16/9", maxHeight: "78vh" }}
          className="w-full cursor-pointer rounded-2xl overflow-hidden will-change-transform relative"
        >
          <div className="absolute inset-0" style={{ background: project.bg }} />
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">
              {project.label}
            </p>
            <p className="text-white text-xl md:text-3xl font-medium tracking-tight">
              {project.title}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Showcase() {
  const [selected, setSelected] = useState<(typeof showcaseProjects)[0] | null>(null);

  return (
    <>
      <section>
        {showcaseProjects.map((project) => (
          <ShowcaseCard
            key={project.title}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </section>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
