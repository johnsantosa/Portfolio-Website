// src/app/skills/page.tsx
export default function SkillsPage() {
  const groups = [
    {
      title: "Programming & Frameworks",
      items: [
        "Python", "TypeScript / JavaScript", "Java", "SQL",
        "React / Next.js", "Angular", "Django", "Tailwind CSS", "HTML / CSS"
      ],
    },
    {
      title: "Data & AI",
      items: ["Pandas", "PyTorch", "Statsmodels", "Gymnasium", "Selenium", "API Integration"],
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "Linux", "Apache Airflow", "AliCloud MaxCompute"],
    },
    { title: "Languages", items: ["English", "Indonesian", "Mandarin"] },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold">Skills</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((g) => (
          <section key={g.title} className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
            <h2 className="text-lg font-semibold">{g.title}</h2>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              {g.items.map((it) => (
                <li key={it} className="rounded-lg border border-neutral-200 px-2.5 py-1 dark:border-neutral-800">
                  {it}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
