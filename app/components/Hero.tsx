import Image from "next/image";

const stack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"];

export default function Hero() {
  return (
    <header className="relative mx-2 mt-2 overflow-hidden rounded-[22px] bg-[#0b0f24] text-[#eef1f6] md:mx-auto md:mt-3 md:max-w-6xl md:rounded-[28px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_85%_10%,rgba(80,96,255,0.55),transparent_60%)]" />

      <nav className="relative flex items-center justify-between px-5 py-5 font-display text-base font-bold md:px-8">
        <span>Kashif Ali</span>
        <div className="flex gap-5 font-medium">
          <a href="#work" className="hover:text-[#aeb5ff]">Work</a>
          <a href="#about" className="hover:text-[#aeb5ff]">About</a>
          <a href="#contact" className="hover:text-[#aeb5ff]">Contact</a>
        </div>
      </nav>

      <div className="relative grid items-center gap-10 px-5 pb-12 pt-6 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-3.5 py-2 font-display text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3ddc84]" />
            Open to full-time roles and freelance projects
          </div>

          <h1 className="mb-5 font-display text-4xl font-bold leading-[1.15] tracking-normal md:text-5xl">
            Front-end developer building fast, responsive websites with React
            and Next.js.
          </h1>

          <p className="mb-8 max-w-[40ch] text-xl leading-relaxed text-[#c9cfe6]">
            <span className="font-medium text-white">Kashif Ali</span>, based
            in Rahim Yar Khan, Pakistan. I turn ideas and designs into clean,
            working interfaces, and I am open to remote work.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-xl border-2 border-white bg-white px-5 py-3.5 font-display font-bold text-[#0b0f24] transition-transform hover:-translate-y-0.5"
            >
              See my work
            </a>
            <a
              href="https://wa.me/923017536107"
              className="rounded-xl border-2 border-white/35 px-5 py-3.5 font-display font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Message on WhatsApp
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2 font-display text-sm text-[#aeb5cf]">
            {stack.map((item) => (
              <li key={item} className="rounded-lg bg-white/10 px-3 py-1">
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#work"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm text-[#c9cfe6] transition-colors hover:text-white"
          >
            Latest project: Garam Chai House <span aria-hidden>→</span>
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[320px] md:ml-auto md:mr-4">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[20px] bg-[#3340ff]" />
          <Image
            src="/images/kashif.jpg"
            alt="Portrait of Kashif Ali"
            width={450}
            height={600}
            priority
            className="relative h-auto w-full rounded-[20px] border-2 border-white/70 object-cover"
          />
        </div>
      </div>
    </header>
  );
}