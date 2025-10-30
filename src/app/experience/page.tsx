// src/app/experience/page.tsx
import Image from "next/image";

type Exp = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  logoSrc: string; // small circular logo in /public/logos
};

export default function ExperiencePage() {
  const experiences: Exp[] = [
    {
      company: "GoTo Group",
      role: "Data Engineering Intern",
      period: "May 2025 – Sep 2025",
      location: "Jakarta, Indonesia",
      bullets: [
        "Developed a Python-based MT940 parser to process bank statements from 11 institutions, structuring financial data into summary/detail tables for automated ingestion into AliCloud MaxCompute.",
        "Created and optimized SQL and Python-based ingestion scripts, reducing ETL runtime by 30% per bank while maintaining data integrity across large datasets.",
        "Benchmarked a Python-based ingestion script against the OSS2MC plugin, identifying and fixing critical errors in the plugin job. Improved data ingestion speed by 20% and ensured full row-level accuracy across 100,000+ financial records.",
      ],
      logoSrc: "/images/experiences/goto.png",
    },
    {
      company: "PT. Bank Central Asia (BCA)",
      role: "Front-End Developer Intern",
      period: "May 2024 – Aug 2024",
      location: "Jakarta, Indonesia",
      bullets: [
        "Developed four fully responsive web pages using Angular, HTML, Tailwind CSS, and TypeScript, ensuring an intuitive and visually appealing user experience across devices.",
        "Engineered API-driven dynamic components that automatically generate content from the database, reducing manual updates by 80% and improving website scalability.",
        "Optimized REST API integrations and Angular routing logic, enabling real-time data retrieval and reducing average page load time by 25%.",
      ],
      logoSrc: "/images/experiences/bca.png",
    },
    {
      company: "PT. Proskuneo Kadarusman",
      role: "Web Dev Intern",
      period: "Feb 2024 – May 2024",
      location: "Jakarta, Indonesia",
      bullets: [
        "Defined technical requirements and proposed UI/UX enhancements in collaboration with designers, contributing to the redesign of the company profile website.",
        "Developed 5+ fully responsive, mobile-friendly pages in Angular, improving cross-device accessibility and increasing mobile engagement by 40%.",
        "Built interactive features including real-time forms and dynamic navigation using Angular and TypeScript, boosting form submissions and contact requests by 120%.",
      ],
      logoSrc: "/images/experiences/proskuneo.jpg",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-10">
      {/* Section header (subtle echo of the reference layout) */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">My Experiences</h1>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <section
            key={exp.company}
            className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800"
          >
            <div className="flex items-start gap-4">
              {/* circular logo */}
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src={exp.logoSrc}
                  alt={`${exp.company} logo`}
                  fill
                  className="rounded-full object-cover ring-1 ring-neutral-200 dark:ring-neutral-800"
                  sizes="48px"
                />
              </div>

              <div className="flex-1 space-y-2">
                {/* top row: role + period badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold leading-tight">
                    {exp.role}
                  </h2>
                  <span className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
                    {exp.period}
                  </span>
                </div>

                {/* company + location */}
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {exp.company}
                  {exp.location ? ` · ${exp.location}` : ""}
                </div>

                {/* bullets */}
                <ul className="mt-2 space-y-1 text-neutral-700 dark:text-neutral-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed">
                      • {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
