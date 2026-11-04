"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";
import { cvPath } from "@/data/contact";
import { navLinks } from "@/data/portfolio-data";
import { useLanguage } from "@/components/LanguageProvider";
import { Download, Menu, Moon, Sun, UserCircle2, X } from "lucide-react";

const noop = () => () => {};

export function Navbar({ hasCv }: { hasCv: boolean }) {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-3 pt-3 sm:px-6">
      <div className="glass glass-navbar mx-auto max-w-6xl px-4 sm:px-5" data-scrolled={scrolled}>
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-x-5 lg:flex-nowrap">
          <a href="#" className="accent-text flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
            <UserCircle2 className="size-7" />
            <span className="font-heading text-2xl font-black">Portfolio</span>
          </a>

          <button
            type="button"
            className="glass-button grid size-10 place-items-center lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="portfolio-navigation"
            aria-label={language === "id" ? "Menu navigasi" : "Navigation menu"}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>

          <div id="portfolio-navigation" className={`${open ? "flex" : "hidden"} w-full flex-col gap-4 pb-4 lg:flex lg:w-auto lg:flex-1 lg:flex-row lg:items-center lg:justify-between lg:pb-0`}>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 lg:mx-auto">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="nav-link py-2 text-sm font-semibold">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-2">
              <div className="glass flex items-center gap-0.5 rounded-full p-0.5">
                {(["id", "en"] as const).map((option) => (
                  <button key={option} type="button" aria-pressed={language === option}
                    onClick={() => setLanguage(option)}
                    className={`rounded-full px-2.5 py-1.5 text-xs font-bold ${language === option ? "bg-cyan-300 text-slate-950" : "nav-link"}`}>
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="glass-button grid size-9 place-items-center" aria-label="Toggle theme">
                {mounted && theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              {hasCv && (
                <a href={cvPath} download className="glass-button glass-primary flex items-center gap-1.5 px-3 py-2 text-xs font-bold">
                  Download CV <Download size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
