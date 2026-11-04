"use client";

import Image from "next/image";
import { cvPath, linkedinUrl } from "@/data/contact";
import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BarChart3, Monitor, Palette } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useMotionPreference } from "@/components/useMotionPreference";
import { translations } from "@/data/translations";

const roles = ["IT Support", "Designer", "Digital Marketing"];
const sequence = roles.flatMap((role) => [role, 1800]);

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const reduceMotion = useMotionPreference();
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const x = useSpring(offsetX, { stiffness: 115, damping: 23 });
  const y = useSpring(offsetY, { stiffness: 115, damping: 23 });

  function move(event: MouseEvent<HTMLElement>) {
    if (reduceMotion || !window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)").matches) return;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    offsetX.set(((event.clientX - left) / width - 0.5) * 22);
    offsetY.set(((event.clientY - top) / height - 0.5) * 18);
  }

  function reset() {
    offsetX.set(0);
    offsetY.set(0);
  }

  return (
    <section className="hero relative isolate px-6 py-14 md:py-20 lg:py-24" onMouseMove={move} onMouseLeave={reset}>
      <div className="hero-atmosphere" aria-hidden="true"><span /><span /></div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div className="min-w-0 text-center md:text-left">
          <p className="hero-enter hero-step-0 accent-text inline-flex items-center gap-2 text-sm font-bold tracking-wide">
            <span className="hero-signal" aria-hidden="true" />{t.heroGreeting}
          </p>
          <h1 className="hero-enter hero-step-1 font-heading mt-3 text-[clamp(2.65rem,7vw,6rem)] font-black leading-[1.02] tracking-[-0.055em]">
            <span className="hero-name" data-visual="Mohammad">Mohammad</span><br />
            <span className="hero-name" data-visual="Choiruddin">Choiruddin</span>
          </h1>
          <div className="hero-enter hero-step-2 mt-5 text-xl font-bold sm:text-2xl">
            {t.heroRole}
            <span className="sr-only"> {roles.join(", ")}</span>
            <span className="accent-text block min-h-[1.5em]" aria-hidden="true">
              {reduceMotion ? roles[0] : (
                <TypeAnimation sequence={sequence} preRenderFirstString speed={60} deletionSpeed={72} repeat={Infinity} />
              )}
            </span>
          </div>
          <p className="hero-enter hero-step-3 mx-auto mt-4 max-w-md text-base leading-7 text-slate-600 dark:text-slate-300 md:mx-0">
            {t.heroDesc}
          </p>
          <div className="hero-enter hero-step-4 mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <SocialIcon label="LinkedIn" icon={<FaLinkedinIn />} href={linkedinUrl} />
            <SocialIcon
              label="WhatsApp"
              icon={<FaWhatsapp />}
              href="https://wa.me/6289650776455"
            />
            <SocialIcon label="Instagram" icon={<FaInstagram />} href="https://www.instagram.com/moch_choiruddin?igsh=NHhiM3lzeDE3aThl" />
            <SocialIcon label="GitHub" icon={<FaGithub />} href="https://github.com/moch-choiruddin" />
          </div>
          <div className="hero-enter hero-step-4 mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
            <a href="#portfolio" className="glass-button glass-primary glass-shine px-6 py-3 text-sm font-bold">
              {t.portfolioBtn} →
            </a>
            <a href="#contact" className="glass-button glass-shine px-6 py-3 text-sm font-bold">
              {t.contactBtn}
            </a>
            <a href={cvPath} download className="glass-button glass-shine px-6 py-3 text-sm font-bold">
              {t.downloadCv}
            </a>
          </div>
        </div>

        <div className="hero-enter hero-step-5 relative mx-auto w-full max-w-[26rem] px-3 sm:px-6">
          <motion.div className="hero-parallax" style={reduceMotion ? undefined : { x, y }}>
            <div className="hero-float relative">
              <div className="hero-frame glass relative aspect-[4/5] overflow-hidden">
                <div className="hero-ring" aria-hidden="true" />
                <div className="hero-frame-inset" aria-hidden="true" />
                <Image
                  src="/Foto Profil.png"
                  alt="Mohammad Choiruddin"
                  fill
                  preload
                  sizes="(max-width: 460px) calc(100vw - 72px), 368px"
                  className="object-contain object-bottom"
                />
              </div>
              <div aria-hidden="true" className="hero-chip hero-chip-it glass"><Monitor size={15} />IT Support</div>
              <div aria-hidden="true" className="hero-chip hero-chip-design glass"><Palette size={15} />Designer</div>
              <div aria-hidden="true" className="hero-chip hero-chip-marketing glass"><BarChart3 size={15} />Digital Marketing</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, href, label }: { icon: ReactNode; href: string; label: string }) {
  return (
    <a href={href} aria-label={label} className="glass-button accent-text grid size-11 place-items-center text-lg">
      {icon}
    </a>
  );
}
