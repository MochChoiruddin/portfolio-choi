"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-24 dark:bg-[#050A0F]">
      <div className="absolute left-10 top-24 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute right-10 bottom-10 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="relative mx-auto grid min-h-[75vh] max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <p className="text-base font-bold text-cyan-400">
            {t.heroGreeting}
          </p>

          <h1 className="font-heading mt-2 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white md:text-5xl lg:text-6xl">
            Mohammad
            <br />
            Choiruddin
          </h1>

          <div className="mt-4 text-xl font-bold text-slate-950 dark:text-white md:text-3xl">
            {t.heroRole}{" "}
            <TypeAnimation
              key={language}
              sequence={[
                "Designer Specialist",
                2000,
                "IT Support ",
                2000,
                "Digital Marketing",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor
              className="text-cyan-400"
            />
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 md:text-base">
            {t.heroDesc}
          </p>

          <div className="mt-6 flex justify-center gap-3 md:justify-start">
            <SocialIcon icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/mohammad-choiruddin-618160206?utm_source=share_via&utm_content=profile&utm_medium=member_android" />
            <SocialIcon
              icon={<FaWhatsapp />}
              href="https://wa.me/6289650776455"
            />
            <SocialIcon icon={<FaInstagram />} href="https://www.instagram.com/moch_choiruddin?igsh=NHhiM3lzeDE3aThl" />
            <SocialIcon icon={<FaGithub />} href="https://github.com/moch-choiruddin" />
          </div>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#portfolio"
              className="rounded-xl bg-cyan-400 px-7 py-3 text-sm font-bold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              {t.portfolioBtn} →
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-cyan-400 px-7 py-3 text-sm font-bold text-slate-900 transition hover:bg-cyan-400 hover:text-black dark:text-white"
            >
              {t.contactBtn}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 relative flex justify-center md:order-2"
        >
          <div className="absolute bottom-10 h-[340px] w-[340px] rounded-full bg-cyan-400/25 blur-[100px]" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[420px] w-[330px] md:h-[500px] md:w-[390px]"
          >
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                d="M130 45C230 5 335 80 342 195C351 323 414 345 334 425C246 514 105 486 47 370C-12 252 28 87 130 45Z"
                fill="rgba(34,211,238,0.22)"
              />
            </svg>

            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                d="M133 48C236 5 342 82 349 198C358 322 419 348 337 430C247 519 104 491 43 372C-16 255 28 88 133 48Z"
                stroke="rgba(34,211,238,0.85)"
                strokeWidth="2.5"
                filter="url(#heroGlow)"
              />

              <defs>
                <filter
                  id="heroGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            <Image
              src="/Foto Profil.png"
              alt="Mohammad Choiruddin"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="relative z-10 object-contain drop-shadow-[0_0_45px_rgba(34,211,238,0.35)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/40 text-lg text-cyan-400 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-black"
    >
      {icon}
    </a>
  );
}