"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
    <div className="text-right">
      <p className="text-sm font-medium text-black">Lorient, France</p>
      <p className="text-sm text-gray-400">
        {date} at {time}
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="px-5 py-6 flex items-center justify-between border-t border-gray-100">
      <div className="flex items-center gap-5">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-black transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://github.com/Constantinvw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-black transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/constantin-v-3ab341213/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-black transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <LiveClock />
    </footer>
  );
}
