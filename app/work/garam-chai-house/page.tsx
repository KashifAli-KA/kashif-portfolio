import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const LIVE_URL = "https://garam-chai-house.vercel.app";
const REPO_URL = "https://github.com/KashifAli-KA/garam-chai-house";

export const metadata: Metadata = {
  title: "Garam Chai House | Kashif Ali",
  description:
    "Case study: a one-page ordering website for a made-up café, built with Next.js, TypeScript and Tailwind CSS.",
};

const facts = [
  { label: "Type", value: "Demo project, not a real business" },
  { label: "Role", value: "Design and development" },
  { label: "Stack", value: "Next.js (App Router), TypeScript, Tailwind CSS" },
  { label: "Hosting", value: "Vercel" },
];

const features = [
  "Photo cards for the most popular dishes, each with a short description, a price and an “Order this” button",
  "An order builder for the full menu: pick items and quantities, choose dine in or take away, pick a day and time",
  "The finished order is sent to the café as a ready-made WhatsApp message",
  "A warning when the visitor picks a Friday (closed) or a time outside 6 am to 2 pm",
  "Opening hours and the area, and a layout that works on phones and large screens",
];

const structure = [
  ["content.ts", "the café details and the menu: names, notes, prices and hours"],
  ["dishes.ts", "the photo cards, with prices read from the menu"],
  ["OrderBuilder.tsx", "the order builder: React state and the WhatsApp message"],
  ["page.tsx", "the page layout"],
];

const h2 =
  "mb-4 font-display text-3xl font-bold tracking-normal md:text-4xl";

export default function CaseStudy() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-8 md:px-8">
      <Link
        href="/"
        className="ulink inline-block font-display text-[15px] font-semibold hover:text-accent"
      >
        ← Back to portfolio
      </Link>

      <header className="mt-10">
        <p className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 font-display text-sm font-medium text-accent">
          Case study · Demo project
        </p>
        <h1 className="mb-5 font-display text-4xl font-bold leading-[1.15] tracking-normal md:text-6xl">
          Garam Chai House
        </h1>
        <p className="max-w-[46ch] text-xl leading-relaxed text-muted">
          A one-page website for a made-up chai and breakfast café in Rahim Yar
          Khan, built to practise one problem: attract customers and make
          ordering easy at the same time.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 font-display font-bold">
          <a
            href={LIVE_URL}
            className="rounded-xl bg-accent px-5 py-3 text-on-accent transition-transform hover:-translate-y-0.5"
          >
            Open live site
          </a>
          <a
            href={REPO_URL}
            className="rounded-xl border-2 border-ink px-5 py-3 transition-transform hover:-translate-y-0.5"
          >
            View source code
          </a>
        </div>
      </header>

      <dl className="mt-12 grid gap-6 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-2 md:p-8">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-display text-sm text-muted">{fact.label}</dt>
            <dd className="mt-1 text-[17px] leading-snug">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 overflow-hidden rounded-2xl border border-line shadow-lg">
        <Image
          src="/images/garam-chai-desktop.webp"
          alt="Home page of the Garam Chai House website on a computer"
          width={1890}
          height={816}
          sizes="(min-width: 896px) 832px, 100vw"
          priority
          className="h-auto w-full"
        />
      </div>

      <section className="mt-16">
        <h2 className={h2}>The problem</h2>
        <p className="mb-4">
          A café website has two jobs. It has to make a visitor want to eat
          there, and it has to make ordering quick. A page that only looks good
          can lose the order, and a page that is only a form feels cold.
        </p>
        <p>
          The hardest part of this project was deciding how to build one site
          that does both, and looking at every choice from two sides: the
          customer and the owner.
        </p>
      </section>

      <section className="mt-16">
        <h2 className={h2}>What I built</h2>
        <ul className="space-y-3 text-[17px] leading-snug">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {feature}
            </li>
          ))}
        </ul>

        <figure className="mt-10 max-w-[280px]">
          <Image
            src="/images/garam-chai-mobile.webp"
            alt="The Garam Chai House home page on a phone"
            width={716}
            height={1370}
            sizes="280px"
            className="h-auto w-full rounded-2xl border border-line shadow-lg"
          />
          <figcaption className="mt-2 font-display text-sm text-muted">
            The same page on a phone
          </figcaption>
        </figure>
      </section>

      <section className="mt-16">
        <h2 className={h2}>How the code is organised</h2>
        <p className="mb-5">
          The content lives apart from the layout, so changing a price or the
          opening hours never means touching the page code.
        </p>
        <ul className="space-y-3 text-[17px] leading-snug">
          {structure.map(([file, text]) => (
            <li key={file}>
              <code className="rounded-md bg-surface px-2 py-0.5 font-mono text-[15px]">
                {file}
              </code>{" "}
              {text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className={h2}>What I learned</h2>
        <p>
          A site like this has two users. Customers want to order in as few
          steps as possible, so the order builder ends in a ready-made WhatsApp
          message. The owner needs orders he can actually serve, so the form
          warns about Fridays and times outside 6 am to 2 pm. Building for both
          taught me to start from the customer&rsquo;s goal, then check every
          feature against what the owner can handle.
        </p>
      </section>

      {/*
        Speed section: switch this on after you have improved the mobile
        score and measured it again. Use the real numbers only.

      <section className="mt-16">
        <h2 className={h2}>Speed</h2>
        <p>
          Mobile Lighthouse score, before: 40. After: ... (write the real result)
        </p>
      </section>
      */}

      <section className="mt-16">
        <h2 className={h2}>What comes next</h2>
        <p>Improve the mobile loading speed, then measure it again.</p>
      </section>

      <div className="mt-16 flex flex-wrap gap-3 border-t border-line pt-8 font-display font-bold">
        <Link
          href="/"
          className="rounded-xl bg-accent px-5 py-3 text-on-accent transition-transform hover:-translate-y-0.5"
        >
          Back to portfolio
        </Link>
        <a
          href={LIVE_URL}
          className="rounded-xl border-2 border-ink px-5 py-3 transition-transform hover:-translate-y-0.5"
        >
          Open live site
        </a>
        <a
          href={REPO_URL}
          className="rounded-xl border-2 border-ink px-5 py-3 transition-transform hover:-translate-y-0.5"
        >
          View source code
        </a>
      </div>
    </main>
  );
}