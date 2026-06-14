"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";

export function About() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [showBio, setShowBio] = useState(false);

  return (
    <section id="about" className="bg-slate-50 dark:bg-[#08111B]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:items-center">
            <div className="relative mx-auto aspect-[4/6] w-full max-w-xs overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-white/5 shadow-[0_0_60px_rgba(34,211,238,0.12)]">
              <Image
                src="/Fotoku1.png"
                alt="Mohammad Choiruddin"
                fill
                sizes="(max-width: 1200px) 100vw, 45vw"
                className="object-contain"
                priority
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                {t.aboutEyebrow}
              </p>

              <h2 className="font-heading mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 dark:text-white md:text-5xl">
                {t.aboutTitle}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
                <p>{t.aboutDesc1}</p>
                <p>{t.aboutDesc2}</p>
              </div>

              <button
                onClick={() => setShowBio(!showBio)}
                className="mt-6 rounded-xl border border-cyan-400/40 px-5 py-3 text-sm font-bold text-cyan-500 transition hover:bg-cyan-400 hover:text-black dark:text-cyan-400"
              >
                {showBio
                  ? language === "id"
                    ? "Sembunyikan Biodata"
                    : "Hide Biodata"
                  : language === "id"
                    ? "Lihat Biodata Lengkap"
                    : "View Full Biodata"}
              </button>

              {showBio && (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
                  <h3 className="mb-5 text-xl font-bold text-slate-950 dark:text-white">
                    {language === "id" ? "Biodata Diri" : "Personal Biodata"}
                  </h3>

                  <div className="grid gap-3 text-sm md:grid-cols-[190px_1fr]">
                    <span className="font-semibold text-slate-950 dark:text-white">
                      {language === "id" ? "Nama" : "Name"}
                    </span>
                    <span>Mohammad Choiruddin</span>

                    <span className="font-semibold text-slate-950 dark:text-white">
                      {language === "id" ? "Jenis Kelamin" : "Gender"}
                    </span>
                    <span>{language === "id" ? "Laki-laki" : "Male"}</span>

                    <span className="font-semibold text-slate-950 dark:text-white">
                      {language === "id"
                        ? "Tempat, Tanggal Lahir"
                        : "Place, Date of Birth"}
                    </span>
                    <span>
                      {language === "id"
                        ? "Sidoarjo, 02 Mei 1997"
                        : "Sidoarjo, May 02, 1997"}
                    </span>

                    <span className="font-semibold text-slate-950 dark:text-white">
                      {language === "id" ? "Status Pernikahan" : "Marital Status"}
                    </span>
                    <span>{language === "id" ? "Lajang" : "Single"}</span>

                    <span className="font-semibold text-slate-950 dark:text-white">
                      {language === "id" ? "Domisili" : "Location"}
                    </span>
                    <span>Sidoarjo, Indonesia</span>
                  </div>

                  <div className="mt-7">
                    <h4 className="mb-3 font-bold text-slate-950 dark:text-white">
                      {language === "id"
                        ? "Riwayat Pendidikan"
                        : "Education History"}
                    </h4>

                    <ul className="space-y-2 text-sm">
                      <li>2003 - 2009 • SDN Panjunan</li>
                      <li>2009 - 2012 • SMP YPM 2 Sukodono</li>
                      <li>2012 - 2015 • SMK YPM 3 Taman</li>
                      <li>
                        2016 - 2020 • Universitas Muhammadiyah Sidoarjo
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}