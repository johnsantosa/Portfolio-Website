// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Santosa — Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // inside RootLayout
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];


  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
        <header className="border-b border-neutral-200/60 dark:border-neutral-800">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold">JS</Link>
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:underline underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-500">
          © {new Date().getFullYear()} John Santosa
        </footer>
      </body>
    </html>
  );
}
