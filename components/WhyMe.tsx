"use client";

import { Reveal } from "@/components/Reveal";
import { whyMeItems } from "@/data/portfolio-data";
import { translations } from "@/data/translations";
import { useLanguage } from "@/components/LanguageProvider";
import { Zap, Layers, Users } from "lucide-react";

const icons = {
  Zap,
  Layers,
  Users,
};

export function WhyMe() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="bg-slate-50 dark:bg-[#08111B]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {language === "id" ? (
                <>
                  Kenapa <span className="text-cyan-400">Saya</span>
                </>
              ) : (
                <>
                  Why <span className="text-cyan-400">Me</span>
                </>
              )}
            </h2>

            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-cyan-400" />

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400 md:text-base">
              {t.whyMeDesc}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {whyMeItems.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];

              return (
                <div
                  key={item.title.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Icon size={22} className="text-cyan-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                    {item.title[language as "id" | "en"]}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description[language as "id" | "en"]}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}