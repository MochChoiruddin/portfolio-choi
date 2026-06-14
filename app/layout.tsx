import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title:
    "Mohammad Choiruddin | IT Support, Designer & Digital Marketing",

  description:
    "Portfolio Mohammad Choiruddin - IT Support Specialist, Graphic Designer, dan Digital Marketing yang berfokus pada solusi teknis, desain kreatif, dan strategi digital.",

  keywords: [
    "Mohammad Choiruddin",
    "Portfolio",
    "IT Support",
    "Graphic Designer",
    "Digital Marketing",
    "Web Developer",
    "UI Designer",
    "Freelancer",
  ],

  authors: [
    {
      name: "Mohammad Choiruddin",
    },
  ],

  creator: "Mohammad Choiruddin",

  openGraph: {
    title:
      "Mohammad Choiruddin | IT Support, Designer & Digital Marketing",

    description:
      "Portfolio profesional Mohammad Choiruddin.",

    url: "https://portfolio-choi.vercel.app",

    siteName: "Portfolio Choi",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Choiruddin Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mohammad Choiruddin | IT Support, Designer & Digital Marketing",

    description:
      "Portfolio profesional Mohammad Choiruddin.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}