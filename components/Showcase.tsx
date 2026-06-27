"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const showcaseProjects = [
  {
    title: "Efsyco",
    label: "AUTONOMOUS DRONES · STARTUP",
    image: "/projects/efsyco1.1.png",
    bg: "#111111",
  },
  {
    title: "TEAM MALIZIA",
    label: "NAVAL ENGINEERING · OCEAN RACE 2026",
    image: "/projects/malizia1.1.jpeg",
    bg: "#0a1628",
  },
];

function ShowcaseCard({ project }: { project: (typeof showcaseProjects)[0] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[180vh] md:h-[220vh]">
      <div className="sticky top-0 h-screen flex items-center px-[18px]">
        <motion.div
          style={{ scale, opacity, aspectRatio: "16/9" }}
          className="w-full rounded-2xl overflow-hidden will-change-transform relative"
        >
          {/* Fallback colored bg until real photo is dropped in */}
          <div
            className="absolute inset-0"
            style={{ background: project.bg }}
          />
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              onError={() => {}} // silently falls back to bg color
            />
          )}
          <div className="absolute bottom-8 left-8">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
              {project.label}
            </p>
            <p className="text-white text-2xl md:text-3xl font-medium tracking-tight">
              {project.title}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section>
      {showcaseProjects.map((project) => (
        <ShowcaseCard key={project.title} project={project} />
      ))}
    </section>
  );
}
