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
  return (
    <main className="min-h-screen bg-white text-slate-950 dark:bg-[#050A0F] dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <WhyMe />
      <Workflow />
      <SoftSkills />
      <Contact />
      <Footer />
    </main>
  );
}