import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: "tennis",
      title: "Tennis Match Outcome Predictor",
      tagline:
        "Predict the winner between any two tennis players — even from different eras.",
      body: [
        "Built an AI model that estimates match win probability using surface type, player form, weather context, and historical head-to-head results.",
        "Supports hypothetical comparisons (ex: peak Djokovic vs peak Federer on clay vs hard court).",
        "Engineered features like serve/return strength, unforced error rate, and performance by surface.",
      ],
      tech: "Python, feature engineering, model evaluation",
    },
    {
      id: "sys",
      title: "SYS — Ticket Marketplace",
      tagline:
        "Full-stack C2C ticket marketplace focused on trust and verification.",
      body: [
        "Designed listing flow, browsing and search, and buyer/seller experience for campus event tickets.",
        "Implemented account system and listing validation to reduce scams.",
        "Optimized the UI for clarity so buyers can verify that tickets are real before committing.",
      ],
      tech: "Angular, Django, SQL, REST API",
    },
    {
      id: "stocks",
      title: "Stock Movement Predictor",
      tagline:
        "Short-term stock direction forecasting using historical pricing patterns.",
      body: [
        "Cleaned and aligned historical OHLC data (open, high, low, close) into supervised learning samples.",
        "Engineered technical signals (momentum, recent volatility, moving averages) to improve directional signal.",
        "Generated predicted vs actual movement and measured whether the model beats baseline chance over recent windows.",
      ],
      tech: "Python, pandas, scikit-learn, time series classification",
    },
    {
      id: "epl",
      title: "Premier League Match Predictor",
      tagline:
        "Probability model for match outcomes in the English Premier League.",
      body: [
        "Pulled match data and team stats, then built features around recent form, home/away splits, and goals for/against.",
        "Produced win/draw/loss probabilities for upcoming fixtures.",
        "Used this as a sandbox to compare sports prediction and financial prediction methods.",
      ],
      tech: "Python, pandas, scikit-learn, public football APIs",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-20">
      {/* HEADER */}
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-sm">
          Selected work across AI/ML, forecasting, data engineering, and full-stack.
        </p>
      </header>

      {/* PROJECT LIST */}
      <section className="space-y-16">
        {projects.map((p) => (
          <article
            key={p.id}
            id={p.id}
            className="rounded-2xl border border-neutral-200 bg-white/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {p.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {p.tagline}
                </p>
              </div>

              <div className="text-[0.7rem] rounded-full border border-neutral-300 bg-white/70 px-3 py-1 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-300">
                {p.tech}
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {p.body.map((line, i) => (
                <li key={i}>• {line}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-neutral-500 dark:text-neutral-500">
        Full project details and code available on request.
      </footer>
    </main>
  );
}
