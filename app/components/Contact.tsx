const EMAIL = "kashifbhatti7536@gmail.com";

// Add your CV file to the public folder, then put its path here,
// for example "/kashif-ali-cv.pdf". The button stays hidden until then.
const CV_URL: string | null = null;

const links = [
  { label: "WhatsApp", href: "https://wa.me/923017536107" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kashifali-ka" },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~0187950495bdcf3ecb",
  },
  { label: "GitHub", href: "https://github.com/KashifAli-KA" },
];

const outline =
  "rounded-xl border-2 border-white/35 px-5 py-3 font-display font-bold text-white transition-transform hover:-translate-y-0.5";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative mx-2 mb-2 mt-4 scroll-mt-6 overflow-hidden rounded-[22px] bg-[#0b0f24] text-[#eef1f6] md:mx-auto md:mb-3 md:max-w-6xl md:rounded-[28px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_15%_0%,rgba(80,96,255,0.45),transparent_60%)]" />

      <div className="relative px-5 py-14 md:px-8 md:py-20">
        <h2 className="mb-4 max-w-[22ch] font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
          Looking for a front-end developer?
        </h2>
        <p className="mb-8 max-w-[44ch] text-xl leading-relaxed text-[#c9cfe6]">
          I am open to full-time roles and freelance projects, remote or local.
          Send me a message and I will reply as soon as I can.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-xl border-2 border-white bg-white px-5 py-3 font-display font-bold text-[#0b0f24] transition-transform hover:-translate-y-0.5"
          >
            Email me
          </a>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={outline}>
              {link.label}
            </a>
          ))}
          {CV_URL && (
            <a href={CV_URL} className={outline}>
              Download CV
            </a>
          )}
        </div>

        <p className="mt-14 font-display text-sm text-[#8d96b3]">
          © 2026 Kashif Ali. Built with Next.js, TypeScript and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}