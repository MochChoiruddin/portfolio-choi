"use client";

import Image from "next/image";
import { flushSync } from "react-dom";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { galleryWorks, type GalleryTab, type GalleryWork } from "@/data/projects";

export function ProjectGallery({ tab }: { tab: GalleryTab }) {
  const { language } = useLanguage();
  const isIndonesian = language === "id";
  const [category, setCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<GalleryWork | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const works = galleryWorks.filter((work) => work.tab === tab);
  const categories = [...new Set(works.map((work) => work.category))];
  const visibleWorks = category === null ? works : works.filter((work) => work.category === category);

  if (works.length === 0) {
    return (
      <p className="glass mt-6 p-5 text-sm text-slate-600 dark:text-slate-300">
        {isIndonesian ? "TODO: Tambahkan karya asli untuk tab ini." : "TODO: Add original work to this tab."}
      </p>
    );
  }

  return (
    <div className="mt-6">
      <div role="group" aria-label={isIndonesian ? "Filter kategori karya" : "Filter work by category"} className="flex flex-wrap gap-2">
        {[null, ...categories].map((option) => (
          <button
            key={option === null ? "all" : `category-${option}`}
            type="button"
            aria-pressed={category === option}
            onClick={() => setCategory(option)}
            className={`glass-button px-3 py-2 text-sm font-semibold ${category === option ? "glass-primary" : ""}`}
          >
            {option ?? (isIndonesian ? "Semua" : "All")}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleWorks.map((work) => (
          <Reveal key={work.image} className="min-w-0">
            <article className="glass glass-lift h-full p-3">
              <button
                type="button"
                aria-label={isIndonesian ? `Perbesar ${work.title}` : `Enlarge ${work.title}`}
                onClick={() => {
                  flushSync(() => setSelected(work));
                  dialog.current?.showModal();
                }}
                className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl bg-slate-900/5 dark:bg-white/5"
              >
                <Image
                  src={`/portfolio/${work.image}`}
                  alt={work.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 265px, (min-width: 640px) 44vw, 86vw"
                  className="object-contain"
                />
              </button>
              <div className="px-1 pb-1 pt-3">
                <p className="accent-text text-xs font-semibold">{work.category}</p>
                <h3 className="mt-1 break-words font-bold">{work.title}</h3>
                <p className="mt-1 break-words text-sm text-slate-600 dark:text-slate-300">{work.description}</p>
                {work.videoUrl && (
                  <a href={work.videoUrl} target="_blank" rel="noopener noreferrer" className="glass-button mt-3 inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold">
                    {isIndonesian ? "Tonton" : "Watch"} <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <dialog
        ref={dialog}
        aria-labelledby="portfolio-lightbox-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-4xl overflow-auto bg-transparent p-0 text-inherit backdrop:bg-slate-950/80"
      >
        <div className="glass p-3 sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 id="portfolio-lightbox-title" className="min-w-0 break-words font-bold">{selected?.title}</h3>
            <button type="button" autoFocus aria-label={isIndonesian ? "Tutup pratinjau" : "Close preview"} onClick={() => dialog.current?.close()} className="glass-button grid size-10 shrink-0 place-items-center">
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          {selected && (
            <div className="relative h-[min(68dvh,42rem)]">
              <Image src={`/portfolio/${selected.image}`} alt={selected.title} fill sizes="(min-width: 960px) 850px, 90vw" className="object-contain" />
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}
