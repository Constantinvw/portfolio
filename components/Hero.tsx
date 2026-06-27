"use client";

import { useEffect, useState } from "react";

const rotatingWords = [
  "stuff.",
  "products.",
  "ideas.",
  "apps.",
  "experiences.",
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
    <section className="flex-1 flex flex-col justify-end pb-16 px-5 min-h-screen">
      <div>
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
      <div className="mt-8 flex justify-center">
        <p className="text-xs text-gray-400 tracking-widest uppercase">
          Scroll to reveal ↓
        </p>
      </div>
    </section>
  );
}
