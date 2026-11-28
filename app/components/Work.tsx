import Image from "next/image";
import Link from "next/link";

const LIVE_URL = "https://garam-chai-house.vercel.app";
const REPO_URL = "https://github.com/KashifAli-KA/garam-chai-house";

const features = [
  "Photo cards for the popular dishes, each with a price and an “Order this” button",
  "An order builder: pick items and quantities, choose dine in or take away, pick a day and time",
  "The finished order goes to the café as a ready-made WhatsApp message",
  "Warnings when the visitor picks a Friday or a time outside opening hours",
  "Works on phones and large screens",
];

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 md:px-8"
    >
      <h2 className="reveal mb-8 font-display text-4xl font-bold tracking-normal md:text-5xl">
        Selected work
      </h2>

      <article className="reveal grid gap-8 rounded-3xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[1.25fr_1fr] md:gap-10 md:p-8">
        <div className="self-start">
          <a
            href={LIVE_URL}
            aria-label="garam-chai-house.vercel.app, open the live Garam Chai House website"
            className="block overflow-hidden rounded-2xl border border-line shadow-lg"
          >
            <div className="flex items-center gap-1.5 bg-line px-3.5 py-2.5 text-xs text-muted">
              <i className="h-2.5 w-2.5 rounded-full bg-muted/50" />
              <i className="h-2.5 w-2.5 rounded-full bg-muted/50" />
              <i className="h-2.5 w-2.5 rounded-full bg-muted/50" />
              <span className="ml-2 rounded-md bg-surface px-2.5 py-0.5">
                {LIVE_URL.replace("https://", "")}
              </span>
            </div>
            <Image
              src="/images/garam-chai-mobile.webp"
              alt="Home page of the Garam Chai House website on a phone"
              width={716}
              height={1370}
              sizes="100vw"
              className="h-auto w-full md:hidden"
            />
            <Image
              src="/images/garam-chai-desktop.webp"
              alt="Home page of the Garam Chai House website on a computer"
              width={1890}
              height={816}
              sizes="(min-width: 1152px) 600px, 55vw"
              className="hidden h-auto w-full md:block"
            />
          </a>

          <figure className="mt-6 hidden max-w-[220px] md:block">
            <Image
              src="/images/garam-chai-mobile.webp"
              alt="The same page on a phone"
              width={716}
              height={1370}
              sizes="220px"
              className="h-auto w-full rounded-2xl border border-line shadow-lg"
            />
            <figcaption className="mt-2 font-display text-sm text-muted">
              The same page on a phone
            </figcaption>
          </figure>
        </div>

        <div>
          <p className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 font-display text-sm font-medium text-accent">
            Demo project
          </p>
          <h3 className="mb-2 font-display text-3xl font-bold tracking-normal">
            Garam Chai House
          </h3>
          <p className="mb-5 font-display text-sm text-muted">
            Next.js, TypeScript, Tailwind CSS, deployed on Vercel
          </p>

          <p className="mb-5">
            A one-page site for a made-up chai and breakfast café in Rahim Yar
            Khan. I built it around one problem: a site that attracts customers
            and makes ordering easy at the same time.
          </p>

          <ul className="mb-6 space-y-2.5 text-[17px] leading-snug">
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

          <p className="mb-7 text-[17px]">
            <span className="font-display font-bold">What I learned: </span>
            A site like this has two users. Customers want to order in as few
            steps as possible, so the order builder ends in a ready-made
            WhatsApp message. The owner needs orders he can actually serve, so
            the form warns about Fridays and times outside 6 am to 2 pm.
            Building for both taught me to start from the customer&rsquo;s
            goal, then check every feature against what the owner can handle.
            Next, I am improving the mobile loading speed.
          </p>

          <div className="flex flex-wrap gap-3 font-display font-bold">
            <Link
              href="/work/garam-chai-house"
              className="rounded-xl bg-accent px-5 py-3 text-on-accent transition-transform hover:-translate-y-0.5"
            >
              Read the case study
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
        </div>
      </article>

      <div className="reveal mt-5 rounded-2xl border-2 border-dashed border-line px-6 py-5 text-muted">
      
      </div>
    </section>
  );
}