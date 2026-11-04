"use client";

import { Reveal } from "@/components/Reveal";
import { workflowSteps } from "@/data/portfolio-data";
import { translations } from "@/data/translations";
import { useLanguage } from "@/components/LanguageProvider";
import { FileText, Play, BarChart3, RefreshCw } from "lucide-react";

const icons = [FileText, Play, BarChart3, RefreshCw];

export function Workflow() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section id="workflow">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {language === "id" ? (
                <>
                  Cara Saya <span className="text-cyan-400">Bekerja</span>
                </>
              ) : (
                <>
                  My <span className="text-cyan-400">Workflow</span>
                </>
              )}
            </h2>

            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-cyan-400" />

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400 md:text-base">
              {t.workflowDesc}
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map((step, index) => {
                const Icon = icons[index];

                return (
                  <Reveal key={step.number}>
                    <div className="glass glass-lift h-full p-4 text-center">
                      <div className="accent-text mx-auto grid size-14 place-items-center rounded-2xl bg-cyan-400/10">
                        <Icon size={34} />
                      </div>

                      <p className="mt-5 text-sm font-bold text-cyan-400">
                        {step.number}
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">
                        {step.title[language as "id" | "en"]}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        {step.description[language as "id" | "en"]}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
