import Image from "next/image";

// TODO: replace with your real live address before launch
const LIVE_URL = "https://garam-chai-house.vercel.app";

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

          <h1 className="mb-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
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
        </div>

        <a
          href={LIVE_URL}
          className="block overflow-hidden rounded-2xl bg-white shadow-2xl md:rotate-1"
          aria-label="Open the live Garam Chai House website"
        >
          <div className="flex items-center gap-1.5 bg-[#edeff4] px-3.5 py-2.5 text-xs text-[#5a6272]">
            <i className="h-2.5 w-2.5 rounded-full bg-[#c5cad6]" />
            <i className="h-2.5 w-2.5 rounded-full bg-[#c5cad6]" />
            <i className="h-2.5 w-2.5 rounded-full bg-[#c5cad6]" />
            <span className="ml-2 rounded-md bg-white px-2.5 py-0.5">
              {LIVE_URL.replace("https://", "")}
            </span>
          </div>
          <Image
            src="/images/garam-chai-desktop.png"
            alt="Home page of the Garam Chai House website"
            width={1887}
            height={813}
            priority
            className="h-auto w-full"
          />
        </a>
      </div>
    </header>
  );
}