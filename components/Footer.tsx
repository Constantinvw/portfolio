"use client";

import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "long",
          day: "numeric",
        })
      );
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="md:text-right">
      <p className="text-base font-medium text-black">Lorient, France</p>
      <p className="text-base text-gray-400 mt-0.5">
        {date} at {time}
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-16 pb-10 border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        {/* Left: name + links */}
        <div>
          <p className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Constantin V.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://github.com/Constantinvw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/constantin-v-3ab341213/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: location + clock */}
        <LiveClock />
      </div>

      <p className="text-xs text-gray-300 mt-12">
        © {new Date().getFullYear()} Constantin V.
      </p>
    </footer>
  );
}
