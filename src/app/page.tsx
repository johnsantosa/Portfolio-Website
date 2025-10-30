import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      {/* CENTERED PROFILE IMAGE */}
      <section className="flex flex-col items-center">
        <div className="relative">
          {/* soft glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl" />
          <Image
            src="/images/John.png"
            alt="John Santosa"
            width={280}
            height={280}
            className="rounded-3xl object-cover shadow-xl ring-2 ring-neutral-200 dark:ring-neutral-800"
            priority
          />
        </div>
      </section>

      {/* HERO */}
      <section className="flex flex-col items-start gap-6">
        <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
          Available for Spring & Summer 2026 internships
        </span>
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          John Alexander Santosa
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Hi, I'm John Alexander Santosa, a junior at 
            <strong> Northeastern University's Khoury College of Computer Sciences</strong>, 
            majoring in <strong>Computer Science</strong> with a concentration in 
            <strong> Artificial Intelligence</strong>. I’m passionate about building 
            intelligent systems and scalable software
            that bridge data, design, and impact. Having gained hands-on experience in 
             data engineering, web development, and 
             machine learning, I aim to help shape Indonesia’s growing 
             AI and technology ecosystem. I’m always open to connecting 
            with new people and exploring opportunities. Feel free to reach out at{" "}
            <Link
              href="mailto:santosa.j@northeastern.edu"
              className="group inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition"
            >
              <span className="underline underline-offset-4 decoration-neutral-400 group-hover:decoration-neutral-600">
                 santosa.j@northeastern.edu
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </p>


        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS (kept) */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            k: "Stack",
            v: "Python • TypeScript • Java • SQL • Angular • React • Django • Tailwind CSS",
          },
          {
            k: "Focus",
            v: "AI/ML + Data Science / Engineering + Software Engineering",
          },
          {
            k: "Tooling",
            v: "Git • Linux • Apache Airflow • MaxCompute",
          },
        ].map((item) => (
          <div
            key={item.k}
            className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800"
          >
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              {item.k}
            </div>
            <div className="mt-1 font-medium">{item.v}</div>
          </div>
        ))}
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="space-y-10 text-white">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">My Experience</h2>
          <p className="text-neutral-400 text-sm">
            A quick look at where I’ve been and what I’ve done.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* vertical line */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2
              w-[3px] bg-neutral-600
              top-16 bottom-16
            "
          />

          <ul className="space-y-24">
            {/* GoTo Group */}
            <li className="relative flex flex-col sm:flex-row sm:items-start">
              {/* LEFT CARD */}
              <div className="w-full sm:w-1/2 pr-10 text-right">
                <div className="inline-block max-w-88 rounded-xl border border-neutral-700 bg-neutral-900/70 p-5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm">
                  <div className="font-semibold text-white text-lg">GoTo Group</div>
                  <div className="text-sm italic text-neutral-300 mb-1">
                    Data Engineering Intern
                  </div>
                  <div className="text-xs text-neutral-400">May 2025 – Sep 2025</div>
                </div>
              </div>

              {/* CENTER LOGO */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div className="relative h-16 w-16 rounded-full ring-2 ring-neutral-400 bg-white">
                  <Image
                    src="/images/experiences/goto.png"
                    alt="GoTo Group logo"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
              </div>

              {/* RIGHT SPACER */}
              <div className="hidden w-1/2 sm:block pl-6" />
            </li>

            {/* BCA */}
            <li className="relative flex flex-col sm:flex-row sm:items-start">
              {/* LEFT SPACER */}
              <div className="hidden w-1/2 sm:block pr-6" />

              {/* CENTER LOGO */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div className="relative h-16 w-16 rounded-full ring-2 ring-neutral-400 bg-white">
                  <Image
                    src="/images/experiences/bca.png"
                    alt="BCA logo"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="w-full sm:w-1/2 pl-10 text-left">
                <div className="inline-block max-w-88 rounded-xl border border-neutral-700 bg-neutral-900/70 p-5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm">
                  <div className="font-semibold text-white text-lg">PT. Bank Central Asia (BCA)</div>
                  <div className="text-sm italic text-neutral-300 mb-1">
                    Front-End Developer Intern
                  </div>
                  <div className="text-xs text-neutral-400">
                    May 2024 – Aug 2024
                  </div>
                </div>
              </div>
            </li>


            {/* Proskuneo */}
            <li className="relative flex flex-col sm:flex-row sm:items-start">
              {/* LEFT CARD */}
              <div className="w-full sm:w-1/2 pr-10 text-right">
                <div className="inline-block max-w-88 rounded-xl border border-neutral-700 bg-neutral-900/70 p-5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm">
                  <div className="font-semibold text-white text-lg">
                    Proskuneo Kadarusman
                  </div>
                  <div className="text-sm italic text-neutral-300 mb-1">
                    Web Development Intern
                  </div>
                  <div className="text-xs text-neutral-400">Feb 2024 – May 2024</div>
                </div>
              </div>

              {/* CENTER LOGO */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div className="relative h-16 w-16 rounded-full ring-2 ring-neutral-400 bg-white">
                  <Image
                    src="/images/experiences/proskuneo.jpg"
                    alt="Proskuneo logo"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
              </div>

              {/* RIGHT SPACER */}
              <div className="hidden w-1/2 sm:block pl-6" />
            </li>
          </ul>
        </div>
      </section>




      {/* FEATURED PROJECTS (resume-aligned) */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured Work</h2>
          <Link href="/projects" className="text-sm underline underline-offset-4">
            See all
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Stock Price Prediction Model",
              date: "Feb 2025 – Apr 2025",
              desc:
                "Linear regression on historical data + technical indicators; automated diagnostics and testing with Pandas & Statsmodels.",
            },
            {
              title: "SellYourStuff (SYS)",
              date: "Oct 2024 – Mar 2025",
              desc:
                "C2C ticket resale platform using React, Django, and SQL; responsive UI and optimized queries improved load times by ~30%.",
            },
            {
              title: "Soccer Predicting Model",
              date: "Jan 2025 – Mar 2025",
              desc:
                "Python ETL with Selenium + WhoScored; dynamic rating system factoring goal diff & home/away to boost predictive accuracy.",
            },
          ].map((p) => (
            <Link
              key={p.title}
              href="/projects"
              className="group rounded-2xl border border-neutral-200 p-5 transition hover:shadow-sm dark:border-neutral-800"
            >
              <div className="text-lg font-semibold group-hover:underline">{p.title}</div>
              <p className="text-xs text-neutral-500 mt-1">{p.date}</p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>


      {/* CTA (kept) */}
      <section className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something.</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Open to SWE/Data/ML roles; based in the US. Resume available on request.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
            >
              Contact
            </Link>
            <a
              href="https://github.com/johnsantosa"
              target="_blank"
              className="rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium dark:border-neutral-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
