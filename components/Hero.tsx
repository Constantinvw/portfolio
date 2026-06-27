"use client";

import { useEffect, useState } from "react";

const rotatingWords = [
  "robots.",
  "systems.",
  "drones.",
  "hardware.",
  "ideas.",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col justify-end px-5 min-h-screen pb-0">
      <div className="pb-16">
        <p className="text-3xl md:text-5xl font-normal leading-tight tracking-tight">
          Hi, I&apos;m Constantin.
        </p>
        <p className="text-3xl md:text-5xl font-normal leading-tight tracking-tight">
          I design and build{" "}
          <span
            className="text-gray-400 transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {rotatingWords[wordIndex]}
          </span>
        </p>
      </div>
      <div className="flex justify-center pb-6">
        <p className="text-xs text-gray-400 tracking-widest">
          Scroll to reveal ↓
        </p>
      </div>
    </section>
  );
}
