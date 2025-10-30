import Link from "next/link";

export default function ContactPage() {
  const contacts = [
    {
      label: "Email",
      value: "santosa.j@northeastern.edu",
      href: "mailto:santosa.j@northeastern.edu",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+1 (857) 437-2930",
      href: "tel:+18574372930",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.25 6.75c0 8.285 6.715 15 15 15 .884 0 1.737-.07 2.55-.2a1.5 1.5 0 001.236-1.48v-2.548a1.5 1.5 0 00-1.32-1.493l-3.547-.474a1.5 1.5 0 00-1.326.43l-1.187 1.187a12.035 12.035 0 01-5.307-5.307l1.187-1.187a1.5 1.5 0 00.43-1.326l-.474-3.547a1.5 1.5 0 00-1.493-1.32H3.93a1.5 1.5 0 00-1.48 1.236c-.13.813-.2 1.666-.2 2.55z"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/johnsantosa",
      href: "https://www.linkedin.com/in/johnsantosa",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.05 0 5.98 3.32 5.98 7.63V24h-5V16.2c0-1.86-.03-4.24-2.58-4.24-2.58 0-2.98 2.01-2.98 4.09V24H8z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/johnsantosa",
      href: "https://github.com/johnsantosa",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 .5A11.5 11.5 0 0 0 .5 12.4c0 5.27 3.44 9.73 8.21 11.3.6.1.82-.27.82-.6v-2.1c-3.34.75-4.04-1.45-4.04-1.45-.55-1.4-1.35-1.77-1.35-1.77-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.09 1.88 2.85 1.34 3.55 1.03.11-.81.43-1.35.78-1.66-2.67-.31-5.47-1.38-5.47-6.17 0-1.36.47-2.48 1.25-3.36-.13-.31-.54-1.58.12-3.28 0 0 1.01-.33 3.3 1.28a11.2 11.2 0 0 1 6 0c2.28-1.61 3.29-1.28 3.29-1.28.66 1.7.25 2.97.12 3.28.78.88 1.25 2 1.25 3.36 0 4.8-2.8 5.85-5.48 6.16.44.38.84 1.13.84 2.3v3.41c0 .33.22.7.83.59A11.5 11.5 0 0 0 23.5 12.4 11.5 11.5 0 0 0 12 .5Z"
          />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Boston, MA (Open to relocate)",
      href: "https://maps.app.goo.gl/",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5Z"
          />
        </svg>
      ),
    },
    {
      label: "Availability",
      value: "Jan–Aug 2026",
      href: "/",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-16">
      {/* HEADER */}
      <header className="text-center space-y-4">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white/50 px-3 py-1 text-xs text-neutral-600 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300">
          Open to Software / Data / ML roles
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Let’s get in touch</h1>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto text-sm">
            The fastest way to reach me is email or phone. I’m happy to talk about roles,
            projects, or collaborations.
          </p>
        </div>
      </header>

      {/* GRID OF CONTACT METHODS */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            className="group rounded-2xl border border-neutral-200 bg-white/50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur-sm transition hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-[0_30px_80px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-start gap-3">
              <span className="text-neutral-500 transition group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                {c.icon}
              </span>

              <div className="flex flex-col">
                <div className="text-xs uppercase tracking-wide text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                  {c.label}
                </div>

                <div className="mt-0.5 font-medium text-neutral-900 underline-offset-4 group-hover:underline dark:text-neutral-100">
                  {c.value}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA / CLOSER */}
      <section className="rounded-2xl border border-neutral-200 bg-white/50 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Let’s talk.
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
          Recruiters, founders, other students, anyone — if you’ve got something interesting,
          I’d love to hear it.
        </p>

        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="mailto:santosa.j@northeastern.edu"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
          >
            Email Me
          </Link>

          <Link
            href="tel:+18574372930"
            className="rounded-xl border border-neutral-300 bg-white/50 px-4 py-2 text-sm font-medium text-neutral-700 backdrop-blur-sm transition hover:bg-white dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            Call Me
          </Link>
        </div>
      </section>
    </main>
  );
}
