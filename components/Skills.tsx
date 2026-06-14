"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { skillsData } from "@/data/portfolio-data";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import {
  Monitor,
  Palette,
  BarChart3,
  Wrench,
  Wifi,
  HardDrive,
  Headphones,
  Server,
  PenTool,
  PenLine,
  ImageIcon,
  Layout,
  FileText,
  Share2,
  Megaphone,
  TrendingUp,
  ClipboardEdit,
} from "lucide-react";

const tabIcons = {
  "IT Support": Monitor,
  Designer: Palette,
  "Digital Marketing": BarChart3,
};

const skillIcons = {
  Troubleshooting: Wrench,
  Networking: Wifi,
  "Hardware & OS": HardDrive,
  "User Support": Headphones,
  "System Admin": Server,

  Branding: PenTool,
  "UI Design": PenLine,
  "Social Media Design": ImageIcon,
  "Layout & Typography": Layout,

  "Content Strategy": FileText,
  "Social Media Mgmt": Share2,
  "Ads & Campaign": Megaphone,
  Analytics: TrendingUp,
  Copywriting: ClipboardEdit,
};

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const [activeTab, setActiveTab] = useState(skillsData[0].id);

  const activeSkill = skillsData.find((item) => item.id === activeTab);

  if (!activeSkill) return null;

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <div className="mb-8 text-center">
          <h2 className="font-heading text-2xl font-black tracking-tight text-slate-950 dark:text-white md:text-3xl">
            {language === "id" ? (
              <>
                Keahlian <span className="text-cyan-400">& Tools</span>
              </>
            ) : (
              <>
                Skills <span className="text-cyan-400">& Tools</span>
              </>
            )}
          </h2>

          <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-cyan-400" />

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400 md:text-base">
            {t.skillsDesc}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid rounded-xl bg-slate-200 p-1 dark:bg-white/10 md:grid-cols-3">
            {skillsData.map((item) => {
              const Icon = tabIcons[item.title as keyof typeof tabIcons];

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-300 md:text-sm ${
                    activeTab === item.id
                      ? "bg-cyan-400 text-black"
                      : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {Icon && <Icon size={15} />}
                  {item.title}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.35fr_1fr]">
            <div>
              <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                {t.skillsLabel}
              </h3>

              <div className="space-y-2">
                {activeSkill.skills.map((skill) => {
                  const Icon = skillIcons[skill as keyof typeof skillIcons];

                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                    >
                      {Icon && <Icon size={17} className="text-cyan-400" />}
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                {t.toolsLabel}
              </h3>

              <div className="flex flex-wrap gap-2">
                {activeSkill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-900 dark:bg-white/10 dark:text-white md:text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}