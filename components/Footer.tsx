"use client";

import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { language } = useLanguage();

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#050A0F]">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-black text-slate-950 dark:text-white">
              Mohammad <span className="text-cyan-400">Choiruddin</span>
            </h2>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {language === "id"
                ? "Designer • Support IT •  Digital Marketing"
                : "Designer • Support IT •  Digital Marketing"}
            </p>

            <p className="mt-2 max-w-md text-xs leading-5 text-slate-500 dark:text-slate-500">
              {language === "id"
                ? "Membangun solusi praktis melalui teknologi, desain, dan strategi digital."
                : "Building practical solutions through technology, design, and digital strategy."}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FooterIcon href="mailto:mochchoiruddin99@gmail.com" icon={<Mail size={17} />} />
            <FooterIcon href="https://www.linkedin.com/in/mohammad-choiruddin-618160206?utm_source=share_via&utm_content=profile&utm_medium=member_android" icon={<FaLinkedinIn />} />
            <FooterIcon href="https://wa.me/6289650776455" icon={<FaWhatsapp />} />
            <FooterIcon href="https://www.instagram.com/moch_choiruddin?igsh=NHhiM3lzeDE3aThl" icon={<FaInstagram />} />
            <FooterIcon href="https://github.com/moch-choiruddin" icon={<FaGithub />} />

            <button
              onClick={scrollToTop}
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
              aria-label="Back to top"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500 dark:border-white/10 md:flex-row">
          <p>
            © {year} Mohammad Choiruddin.{" "}
            {language === "id" ? "Hak cipta dilindungi." : "All rights reserved."}
          </p>

          <p>
            {language === "id" ? "Dibuat dengan Next.js & Tailwind CSS." : "Built with Next.js & Tailwind CSS."}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-400 dark:border-white/10 dark:text-slate-400"
    >
      {icon}
    </a>
  );
}