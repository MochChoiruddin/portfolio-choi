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
    <section id="workflow" className="bg-slate-50 dark:bg-[#08111B]">
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
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-slate-300 dark:bg-white/10 md:block" />

            <div className="grid gap-8 md:grid-cols-4">
              {workflowSteps.map((step, index) => {
                const Icon = icons[index];

                return (
                  <div key={step.number} className="relative text-center">
                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-cyan-400 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.04]">
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
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}