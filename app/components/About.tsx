const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Firebase",
  "Git and GitHub",
];

const facts = [
  { label: "Based in", value: "Rahim Yar Khan, Pakistan" },
  {
    label: "Education",
    value: "BS Computer Science, Khawaja Fareed University of Engineering and IT (2025)",
  },
  { label: "Work", value: "Freelance front-end development" },
  { label: "Open to", value: "Full-time roles and freelance projects, remote or local" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-6 border-t border-line px-5 py-20 md:px-8"
    >
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-normal md:text-5xl">
            About me
          </h2>
          <p className="mb-5">
            I am a front-end developer from Rahim Yar Khan, Pakistan. I
            graduated in Computer Science in 2025, and I now take on freelance
            front-end work while building projects of my own.
          </p>
          <p className="mb-5">
            I work step by step and check the details before I call something
            finished. I am looking for a front-end role where I can keep
            learning on a real team.
          </p>

          <h3 className="mb-3 mt-8 font-display text-xl font-bold">Tools I use</h3>
          <ul className="flex flex-wrap gap-2 font-display text-sm">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-lg border border-line bg-surface px-3 py-1.5"
              >
                {tool}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[17px] text-muted">
            I also know the basics of Node.js and am still learning it.
          </p>
        </div>

        <dl className="self-start rounded-3xl border border-line bg-surface p-6 md:p-8">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={index > 0 ? "mt-5 border-t border-line pt-5" : ""}
            >
              <dt className="font-display text-sm text-muted">{fact.label}</dt>
              <dd className="mt-1 text-[17px] leading-snug">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}