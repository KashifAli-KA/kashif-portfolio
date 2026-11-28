export default function StickyNav() {
  return (
    <nav
      aria-label="Quick navigation"
      className="sticky-nav border-b border-line bg-bg/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 font-display text-[15px] font-semibold md:px-8">
        <a href="#top" className="hover:text-accent">
          Kashif Ali
        </a>
        <div className="flex gap-5">
          <a href="#work" className="ulink hover:text-accent">Work</a>
          <a href="#about" className="ulink hover:text-accent">About</a>
          <a href="#contact" className="ulink hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
}