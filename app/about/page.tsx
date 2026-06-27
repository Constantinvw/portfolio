export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 px-5 pb-24">
      <p className="text-xs text-white/40 mb-10 tracking-wide">↑ About</p>

      <div className="max-w-lg space-y-6 text-sm leading-7 text-white/90">
        <p>
          Hi, I&apos;m Constantin. I design and build robots — for racing
          oceans, exploring underwater, and flying autonomously.
        </p>
        <p>
          Currently I&apos;m part of the technical team at{" "}
          <a
            href="https://www.team-malizia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors"
          >
            TEAM MALIZIA
          </a>
          , contributing to the design and construction of the IMOCA Seaxplorer
          4 ahead of the Ocean Race Atlantic in New York.
        </p>
        <p>
          Before that, I wrote my Bachelor&apos;s thesis on visual SLAM for
          underwater robotics at{" "}
          <a
            href="https://tethys-robotics.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors"
          >
            Tethys Robotics
          </a>{" "}
          in Zürich, and spent over a year as Controls &amp; Hardware Engineer
          for{" "}
          <a
            href="https://aris-space.ch/our-projects/aris-swarm/"
            className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors"
          >
            SWARM
          </a>
          , an autonomous multi-agent underwater system at ETH Zürich.
        </p>
        <p>
          I also co-founded{" "}
          <a
            href="https://www.linkedin.com/company/108298640/"
            className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors"
          >
            Efsyco
          </a>
          , building autonomous fixed-wing aerial solutions that operate
          reliably where GPS fails.
        </p>
        <p className="text-white/40">
          Studied at ETH Zürich. Based in Lorient, France. Open to interesting
          engineering challenges.
        </p>
      </div>
    </main>
  );
}
