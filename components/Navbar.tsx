"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio-data";
import { useLanguage } from "@/components/LanguageProvider";
import { Download, Moon, Sun, UserCircle2 } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050A0F]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
          <a href="#" className="flex items-center gap-2">
            <UserCircle2 className="h-7 w-7 text-cyan-400" />

            <span className="font-heading text-2xl font-black text-cyan-400">
              Portfolio
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-3 md:flex">
            <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.03] p-0.5">
              <button
                onClick={() => setLanguage("id")}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                  language === "id"
                    ? "bg-cyan-400 text-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ID
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                  language === "en"
                    ? "bg-cyan-400 text-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <a
              href="/cv-mohammad-choiruddin.pdf"
              download
              className="flex items-center gap-1.5 rounded-lg bg-cyan-400 px-3 py-1.5 text-xs font-bold text-black transition hover:bg-cyan-300"
            >
              Download CV
              <Download size={13} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}