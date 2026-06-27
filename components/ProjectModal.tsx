"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export type Project = {
  title: string;
  type: string;
  image: string;
  bg: string;
  textLight?: boolean;
  description: string;
  year: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          />

          {/* Floating window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9]" style={{ background: project.bg }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                    {project.type} · {project.year}
                  </p>
                  <h2 className="text-lg font-medium tracking-tight">{project.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-black transition-colors ml-4 mt-0.5"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
