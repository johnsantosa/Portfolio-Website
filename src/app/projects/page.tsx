import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Stock Price Prediction Model",
      date: "Feb 2025 – Apr 2025",
      desc: "Built a linear regression model using historical data and technical indicators; automated testing with Pandas and Statsmodels.",
    },
    {
      title: "SellYourStuff (SYS)",
      date: "Oct 2024 – Mar 2025",
      desc: "C2C ticket-resale platform built with React, Django, and SQL; responsive UI and optimized queries improved load times by 30%.",
    },
    {
      title: "Soccer Predicting Model",
      date: "Jan 2025 – Mar 2025",
      desc: "Python ETL pipeline using Selenium + WhoScored API; dynamic rating system improved predictive accuracy via home/away weighting.",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-sm text-neutral-500">{p.date}</p>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
