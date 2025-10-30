// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-20">
      {/* TOP SECTION: image on left, intro on right */}
      <section className="grid items-center gap-10 sm:grid-cols-2">
        {/* IMAGE */}
        <div className="relative mx-auto w-64 sm:w-80">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
          <Image
            src="/images/john2.jpeg"
            alt="John Alexander Santosa"
            width={320}
            height={320}
            className="rounded-3xl object-cover shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-800"
            priority
          />
        </div>

        {/* INTRO */}
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
          <h1 className="text-5xl font-bold tracking-tight">About Me</h1>
          <p>
            I’m <strong>John Alexander Santosa</strong>, a Computer Science student at
            <strong> Northeastern University’s Khoury College of Computer Sciences</strong>,
            concentrating in <strong>Artificial Intelligence</strong>.
          </p>
          <p>
            I love building things that combine <strong>data, design, and logic</strong> —
            from full-stack web apps to intelligent systems that make workflows smarter
            and more human-friendly.
          </p>
          <p>
            My internships at <strong>GoTo Group</strong>, <strong>Bank Central Asia</strong>,
            and <strong>Proskuneo Kadarusman</strong> taught me to balance scalability with
            polish, and that good engineering is both technical and creative.
          </p>
        </div>
      </section>

      {/* GOALS / CURRENT / INTERESTS SNAPSHOT */}
      <section className="grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "Currently",
            content:
              "Polishing my portfolio, experimenting with ML for sports analytics, and refining my data pipelines.",
          },
          {
            title: "Goals",
            content:
              "Build reliable software and scalable AI tools. Bring global best practices back to Indonesia’s AI scene.",
          },
          {
            title: "Interests",
            content:
              "Data science, web engineering, soccer analytics, and creative AI projects in music or art.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800"
          >
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{card.content}</p>
          </div>
        ))}
      </section>

      {/* HOBBIES & INTERESTS WITH IMAGES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Hobbies & Interests</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              h: "Sports",
              p: "Play a lot of sports such as soccer (my favorite), badminton, padel, pool, and tennis. Also watch a lot of soccer games",
              img: "/images/hobbies/soccer.jpeg",
            },
            {
              h: "Music",
              p: "Love playing music, and have recently been getting into DJ. Want to learn music production next",
              img: "/images/hobbies/music.jpg",
            },
            {
              h: "Video & Board Games",
              p: "Have been gaming since I was a small child. My favorite games to play are CS2, Valorant,and Minecraft. I also love board games.",
              img: "/images/hobbies/game.jpeg",
            },
            {
              h: "Travel & Food",
              p: "Study abroad in Greece sparked my love for exploring new cultures, sceneries, and local dishes. My favorite country visited is Japan.",
              img: "/images/hobbies/travel.jpeg",
            },
          ].map((x) => (
            <div
              key={x.h}
              className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={x.img}
                  alt={x.h}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-medium">{x.h}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{x.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERESTING FACTS */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Interesting Facts</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>I speak <strong>English, Indonesian, and Mandarin</strong>.</li>
          <li>
            Studying abroad in Greece gave me a soft spot for seaside sunsets (and gyros).
          </li>
          <li>
            Took bus rides from Thessaloniki, Greece to Sofia, Bulgaria (7 hour ride) and Budapest, Hungary (16 hour ride).
           </li>
          <li>
            8 is my favorite number.
          </li>
          <li>
            Love collecting sneakers & fashion items.
          </li>
        </ul>
      </section>

      {/* FUNNY STORY */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">A (Short) Funny Story</h2>
        <div className="rounded-2xl border border-neutral-200 p-5 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
          <p>
            During my flight back home to Indonesia, I was stuck in Hong Kong for a good 8 hours because my transit flight was delayed. 
            I met 5 other Indonesians during that time, most were from Northeastern University and 1 student was from a college in Hong Kong (he was my high school upperclassman).
          </p>
        </div>
      </section>

      {/* LINK TO SKILLS */}
      <section className="text-center">
        <p className="text-neutral-600 dark:text-neutral-300">
          Curious about the full toolkit? Visit my{" "}
          <Link
            href="/skills"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-600"
          >
            Skills
          </Link>{" "}
          page.
        </p>
      </section>
    </main>
  );
}
