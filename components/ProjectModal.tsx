"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type Project = {
  title: string;
  type: string;
  images: string[];
  bg: string;
  textLight?: boolean;
  description: string;
  year: string;
  label?: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setPhotoIndex(0);
  }, [project]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && project) setPhotoIndex((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft" && project) setPhotoIndex((i) => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, project]);

  const prev = () => project && setPhotoIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => project && setPhotoIndex((i) => (i + 1) % project.images.length);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[3px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Photo slideshow */}
            <div className="relative w-full aspect-[16/9] group" style={{ background: project.bg }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={photoIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[photoIndex]}
                    alt={`${project.title} ${photoIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Arrows — only if multiple photos */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow"
                  >
                    <ChevronRight size={16} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setPhotoIndex(i); }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === photoIndex ? "bg-white scale-125" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-7">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">
                    {project.type} · {project.year}
                  </p>
                  <h2 className="text-xl font-medium tracking-tight">{project.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-300 hover:text-black transition-colors ml-4 mt-0.5"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm leading-relaxed text-gray-500">{project.description}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
