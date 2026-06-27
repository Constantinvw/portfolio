export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 px-5 pb-24">
      <p className="text-xs text-white/40 mb-10 tracking-wide">↑ About</p>

      <div className="max-w-lg space-y-6 text-sm leading-7 text-white/90">
        <p>
          Hi, I&apos;m Constantin. I design and build software products, either
          to make money or for fun. Some reach thousands, some fail.
        </p>
        <p>
          At 21, I started my first company and got into building software
          products from scratch — combining design, code, and product thinking.
        </p>
        <p>
          I&apos;ve worked alongside founders and built various products
          including tools that reached thousands of people within a few weeks of
          launching.
        </p>
        <p>
          Currently I&apos;m exploring{" "}
          <a
            href="#"
            className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors"
          >
            AI-native products
          </a>{" "}
          and building in public.
        </p>
        <p className="text-white/40">
          Based in Germany. Available for freelance work and interesting
          projects.
        </p>
      </div>
    </main>
  );
}
