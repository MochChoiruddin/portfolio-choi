"use client";

import { Reveal } from "@/components/Reveal";
import { softSkills } from "@/data/portfolio-data";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";

export function SoftSkills() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="bg-white dark:bg-[#050A0F]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {t.softSkillsEyebrow}
            </p>

            <h2 className="font-heading mt-3 text-2xl font-black tracking-tight text-slate-900 dark:text-white md:text-3xl">
              {t.softSkillsTitle}
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400 md:text-base">
              {t.softSkillsDesc}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill.id}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-600 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-black dark:text-cyan-300 md:text-sm"
              >
                {skill[language as "id" | "en"]}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}