import { PageShell } from "@/components/layout/page-shell";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Achievements } from "@/components/sections/achievements";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
    </PageShell>
  );
}
