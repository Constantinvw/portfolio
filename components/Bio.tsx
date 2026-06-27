"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Bio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="px-5 py-20 max-w-2xl"
    >
      <p className="text-base md:text-lg leading-relaxed text-gray-800">
        I design and build robots — for racing oceans, exploring underwater, and
        flying autonomously.{" "}
        <span className="text-gray-400">
          Some reach the finish line, some sink. Currently at TEAM MALIZIA,
          contributing to the IMOCA Seaxplorer 4 for the Ocean Race Atlantic.
        </span>
      </p>
    </motion.section>
  );
}
