import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import StickyNav from "./components/StickyNav";

export default function Home() {
  return (
    <>
      <StickyNav />
      <Hero />
      <main>
        <Work />
        <About />
      </main>
      <Contact />
    </>
  );
}