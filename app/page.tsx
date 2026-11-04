import { existsSync } from "node:fs";
import { join } from "node:path";
import { cvPath } from "@/data/contact";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Workflow } from "@/components/Workflow";
import { SoftSkills } from "@/components/SoftSkills";
import { WhyMe } from "@/components/WhyMe";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  const hasCv = existsSync(join(process.cwd(), "public", cvPath));

  return (
    <main className="portfolio-shell min-h-screen pb-3 text-slate-950 dark:text-white">
      <Navbar hasCv={hasCv} />
      <Hero hasCv={hasCv} />
      <About />
      <Skills />
      <Portfolio />
      <WhyMe />
      <Workflow />
      <SoftSkills />
      <Contact hasCv={hasCv} />
      <Footer />
    </main>
  );
}
