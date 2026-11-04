"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { Mail, Send } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setStatusMessage("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Konfigurasi EmailJS belum lengkap.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message,
          to_email: "mochchoiruddin99@gmail.com",
        },
        {
          publicKey,
        }
      );

      setStatusMessage(t.contactSuccess);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatusMessage(t.contactError);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 dark:text-white md:text-3xl">
              {language === "id" ? (
                <>
                  Hubungi <span className="text-cyan-400">Saya</span>
                </>
              ) : (
                <>
                  Let&apos;s <span className="text-cyan-400">Connect</span>
                </>
              )}
            </h2>

            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-cyan-400" />

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400 md:text-base">
              {t.contactDesc}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <form
              onSubmit={handleSubmit}
              className="glass p-5 sm:p-6"
            >
              <div className="space-y-3">
                <input
                  type="text"
                  aria-label={t.contactName}
                  placeholder={t.contactName}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="glass-field w-full rounded-xl border px-4 py-3 text-sm"
                />

                <input
                  type="email"
                  aria-label={t.contactEmail}
                  placeholder={t.contactEmail}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-field w-full rounded-xl border px-4 py-3 text-sm"
                />

                <textarea
                  rows={4}
                  aria-label={t.contactMessage}
                  placeholder={t.contactMessage}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="glass-field w-full resize-none rounded-xl border px-4 py-3 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-4 flex w-full items-center justify-center gap-2 glass-button glass-primary px-5 py-3 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={16} />
                {isSending
                  ? language === "id"
                    ? "Mengirim..."
                    : "Sending..."
                  : t.contactSend}
              </button>

              {statusMessage && (
                <p role="status" className="mt-3 text-center text-sm text-slate-600 dark:text-slate-400">
                  {statusMessage}
                </p>
              )}
            </form>

            <div className="space-y-3">
              <ContactCard
                icon={<Mail size={20} />}
                title={t.emailLabel}
                value="mochchoiruddin99@gmail.com"
              />

              <ContactCard
                icon={<FaLinkedinIn size={18} />}
                title={t.linkedinLabel}
                value="linkedin.com/in/mochchoiruddin"
              />

              <ContactCard
                icon={<FaWhatsapp size={20} />}
                title={t.whatsappLabel}
                value="+62 896-5077-6455"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="glass glass-lift flex min-w-0 items-center gap-4 p-4">
      <div className="shrink-0 text-cyan-400">{icon}</div>

      <div className="min-w-0">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-1 break-words text-xs text-slate-600 dark:text-slate-400">
          {value}
        </p>
      </div>
    </div>
  );
}
