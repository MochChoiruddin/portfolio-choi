"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { projectCategories, projects } from "@/data/portfolio-data";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import {
  Monitor,
  Palette,
  BarChart3,
  CircleAlert,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const categoryIcons = {
  "IT Support": Monitor,
  Designer: Palette,
  Marketing: BarChart3,
  "Digital Marketing": BarChart3,
};

export function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const [activeCategory, setActiveCategory] = useState(projectCategories[0]);

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white dark:bg-[#050A0F]"
    >
      <div className="absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-950 dark:text-white md:text-3xl">
              Project <span className="text-cyan-400">Showcase</span>
            </h2>

            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-cyan-400" />

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400 md:text-base">
              {t.portfolioDesc}
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid rounded-xl bg-slate-200 p-1 dark:bg-white/10 md:grid-cols-3">
              {projectCategories.map((category) => {
                const Icon =
                  categoryIcons[category as keyof typeof categoryIcons];

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-300 md:text-sm ${
                      activeCategory === category
                        ? "bg-cyan-400 text-black"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                    }`}
                  >
                    {Icon ? <Icon size={15} /> : null}
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/[0.06]"
                >
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                    {project.title}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <ProjectPoint
                      icon={<CircleAlert size={17} />}
                      iconClassName="text-red-500"
                      label={t.problemLabel}
                      text={project.problem}
                    />

                    <ProjectPoint
                      icon={<Lightbulb size={17} />}
                      iconClassName="text-cyan-500 dark:text-cyan-400"
                      label={t.solutionLabel}
                      text={project.solution}
                    />

                    <ProjectPoint
                      icon={<TrendingUp size={17} />}
                      iconClassName="text-green-500 dark:text-green-400"
                      label={t.resultLabel}
                      text={project.result}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectPoint({
  icon,
  iconClassName,
  label,
  text,
}: {
  icon: React.ReactNode;
  iconClassName: string;
  label: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <div className={`mt-0.5 ${iconClassName}`}>{icon}</div>

      <div>
        <span className="rounded-full border border-slate-200 px-2.5 py-0.5 text-[11px] font-bold text-slate-900 dark:border-white/10 dark:text-white">
          {label}
        </span>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}