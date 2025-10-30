// src/app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  const contacts = [
    {
      label: "Email",
      value: "santosa.j@northeastern.edu",
      href: "mailto:santosa.j@northeastern.edu",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 7l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
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
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
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
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.05 0 5.98 3.32 5.98 7.63V24h-5V16.2c0-1.86-.03-4.24-2.58-4.24-2.58 0-2.98 2.01-2.98 4.09V24H8z"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/johnsantosa",
      href: "https://github.com/johnsantosa",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M12 .5A11.5 11.5 0 0 0 .5 12.4c0 5.27 3.44 9.73 8.21 11.3.6.1.82-.27.82-.6v-2.1c-3.34.75-4.04-1.45-4.04-1.45-.55-1.4-1.35-1.77-1.35-1.77-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.09 1.88 2.85 1.34 3.55 1.03.11-.81.43-1.35.78-1.66-2.67-.31-5.47-1.38-5.47-6.17 0-1.36.47-2.48 1.25-3.36-.13-.31-.54-1.58.12-3.28 0 0 1.01-.33 3.3 1.28a11.2 11.2 0 0 1 6 0c2.28-1.61 3.29-1.28 3.29-1.28.66 1.7.25 2.97.12 3.28.78.88 1.25 2 1.25 3.36 0 4.8-2.8 5.85-5.48 6.16.44.38.84 1.13.84 2.3v3.41c0 .33.22.7.83.59A11.5 11.5 0 0 0 23.5 12.4 11.5 11.5 0 0 0 12 .5Z"/>
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Boston, MA (Open to relocate)",
      href: "https://maps.app.goo.gl/",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5Z"/>
        </svg>
      ),
    },
    {
      label: "Availability",
      value: "Jan–Aug 2026",
      href: "/",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>
        </svg>
      ),
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      {/* Header */}
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Let’s get in touch</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Reach out for roles, collaborations, or a quick chat.
        </p>
      </header>

      {/* Cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            className="group rounded-2xl border border-neutral-200 p-5 transition hover:shadow-sm dark:border-neutral-800"
          >
            <div className="flex items-center gap-3">
              <span className="text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                {c.icon}
              </span>
              <div>
                <div className="text-xs uppercase tracking-wide text-neutral-500">
                  {c.label}
                </div>
                <div className="mt-0.5 font-medium underline-offset-4 group-hover:underline">
                  {c.value}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Divider */}
      <div className="border-t border-dashed border-neutral-200 dark:border-neutral-800" />

      {/* Minimal “Write me a note” form (mailto – no backend needed) */}
      <section className="mx-auto max-w-3xl">
        <h2 className="text-xl font-semibold">Write me a quick note</h2>
        <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
          This uses your email client — no data is stored on this site.
        </p>

        {/* Using GET + mailto keeps this page as a server component, no JS needed */}
        <form
          method="GET"
          action="mailto:santosa.j@northeastern.edu"
          encType="text/plain"
          className="space-y-3"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col">
              <span className="mb-1 text-sm text-neutral-600 dark:text-neutral-300">Your name</span>
              <input
                name="name"
                type="text"
                required
                placeholder="Ada Lovelace"
                className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 text-sm text-neutral-600 dark:text-neutral-300">Your email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-neutral-600 dark:text-neutral-300">Subject</span>
            <input
              name="subject"
              type="text"
              required
              placeholder="Opportunity at..."
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-neutral-600 dark:text-neutral-300">Message</span>
            <textarea
              name="message"
              required
              placeholder="Hi John — I came across your portfolio and..."
              rows={6}
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900"
            />
          </label>

          <button
            type="submit"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
          >
            Send via Email
          </button>
        </form>
      </section>
    </main>
  );
}
